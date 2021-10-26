import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false); // 현재 알림이 온 알람 정보

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // 토큰 등록
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // 앱 도중 알림 왔을 때 실행 함수
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        responseListener;
        console.log(`푸시 알람 : ${notification.request.content.title}`);
        setNotification(notification);
        // notification : object with data, identifier, request(content,body,data, title, trigger,...)
      });

    // 알람을 눌렀을 때 일어나는 반응입니다.
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

      {/* 알람 만들기 */}
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />

      {/* 알람 삭제 */}
      <Button
        title="cancel"
        onPress={async () => {
          // 현재 알람 위치
          console.log(notification.request.identifier);
          await Notifications.cancelScheduledNotificationAsync(
            notification.request.identifier
          );
        }}
      />
    </View>
  );
}

// 이런 푸시 알람을 만들겠습니다.
// 알람에 대한 정보를 List로 보여줘야하기 때문에
// asyncStorage에 저장할 작업 필요
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "웰쓰2",
      body: "물마셔",
      data: { data: "goes here" },
    },
    trigger: { seconds: 5, repeats: true },
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
