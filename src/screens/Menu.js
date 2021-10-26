import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import color from "../styles/color";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.page0}></View>

      {/* 인사말 및 프로필 표시 */}
      <View style={styles.page1}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name="hand-paper-o"
            size={24}
            color={color.hc}
            fontWeight="700"
          />
          <Text style={{ color: color.hc, fontSize: 30, fontWeight: "700" }}>
            {" "}
            ㅇㅇㅇ 님 안녕하세요!
          </Text>
        </View>
        <MaterialCommunityIcons
          name="face-profile"
          size={40}
          color={color.bc}
        />
      </View>

      {/* 메뉴 선택지 - Article */}
      <View style={styles.page2}>
        <Article
          title="오늘의 음수량"
          icon="cup-water"
          navigation={navigation}
          name="TodayDrink"
          color={color.orange}
        ></Article>
        <Article
          title="맞춤 건강 진단"
          icon="lead-pencil"
          navigation={navigation}
          name="Diagnosis"
          color={color.lightPurple}
        ></Article>
        <Article
          title="차트 / 통계"
          icon="chart-bar"
          navigation={navigation}
          name="Chart"
          color={color.pink}
        ></Article>
        <Article
          title="Water 알람"
          icon="alarm"
          navigation={navigation}
          name="SetAlarm"
          color={color.purple}
        ></Article>
      </View>

      {/* Footer Part - 모듈 분리 필요*/}
      <View style={styles.page3}>
        <Footer navigation={navigation} current="Menu"></Footer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page0: {
    flex: 1,
  },
  page1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  page2: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  page3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: color.bc,
  },
});

export default Menu;
