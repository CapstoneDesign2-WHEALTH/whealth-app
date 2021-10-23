import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Footer from "../../components/Footer";

const Diagnosis = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.page0}></View>

      {/* 페이지 표시 */}
      <View style={styles.page1}>
        <Text style={{ color: "#145BC7", fontSize: 35, fontWeight: "700" }}>
          맞춤 건강 진단
        </Text>
      </View>

      {/* 맞춤 건강 진단 */}
      <View style={styles.page2}>
        <Text> 맞춤 건강 진단 </Text>
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
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
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

export default Diagnosis;
