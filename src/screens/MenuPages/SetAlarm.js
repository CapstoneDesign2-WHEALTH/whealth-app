import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// 알람 진동,소리 설정
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");

  // 현재 알림이 온 알람 정보
  const [notification, setNotification] = useState(false);

  // 날짜, 시간 선택
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // 토큰 등록
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // 앱 실행 도중 알림 왔을 때 실행 함수
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        responseListener;
        console.log(`푸시 알람 : ${notification.request.content.title}`);
        setNotification(notification);
        // notification : object with data, identifier, request(content,body,data, title, trigger,...)
      });

    // 알람을 눌렀을 때 실행되는 함수
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
        console.log("알람 눌렀습니다.");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>당신의 토큰: {expoPushToken}</Text>

      {/* 알람 내용 */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>

      {/* 날짜 시간 Picker */}
      <View>
        <View>
          <Button onPress={showDatepicker} title="날짜 선택" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="시간 선택" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      {/* 알람 만들기 */}
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification(date);
          console.log(`${date} 에 알람 생성`);
        }}
      />

      {/* 알람 삭제 */}
      <Button
        title="cancel"
        onPress={async () => {
          // 현재 알람 식별자 출력
          console.log(notification.request.identifier);
          await Notifications.cancelScheduledNotificationAsync(
            notification.request.identifier
          );
        }}
      />
    </View>
  );
}

// 푸시 알람을 만들기
// 알람에 대한 정보를 List로 보여줘야하기 때문에
// DB에 저장하는 작업 필요
async function schedulePushNotification(dates) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "웰쓰123",
      body: "물마셔",
      data: { data: "goes here" },
    },
    trigger: {
      date: dates,
      repeats: true,
    },
  });
}

// 푸시 알람을 위한 토큰 가져오기
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // 토큰 출력
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
