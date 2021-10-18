import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Footer from "../components/Footer";
import Wave from "react-native-waveview";

const chartHeight = Dimensions.get("window").height;
const chartWidth = Dimensions.get("window").width;

const TodayDrink = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.page0}></View>

      {/* 페이지 표시 */}
      <View style={styles.page1}>
        <Text style={{ color: "#145BC7", fontSize: 35, fontWeight: "700" }}>
          오늘의 음수량
        </Text>
      </View>

      {/* 음수량 표시 */}
      <View style={styles.page2}>
        <Text style={{ fontSize: 70, color: "#145BC7" }}> 40% </Text>
        <Wave
          style={_styles.waveBall}
          H={(chartHeight / 11) * 2}
          waveParams={[
            { A: 25, T: chartWidth * 2, fill: "#62c2ff" },
            { A: 25, T: chartWidth * 2 + 500, fill: "#0087dc" },
            { A: 20, T: chartWidth * 2 + 1000, fill: "#1aa7ff" },
          ]}
          animated={true}
        />
      </View>

      {/* Footer */}
      <View style={styles.page3}>
        <Footer navigation={navigation}></Footer>
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
    borderBottomColor: "#145BC7",
    borderTopColor: "#145BC7",
  },
  page3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#a3cdf5",
  },
});

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 200,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white",
  },
  waveBall: {
    width: chartWidth - 50,
    aspectRatio: 1,
    borderRadius: 200,
    overflow: "hidden",
  },
});

export default TodayDrink;
