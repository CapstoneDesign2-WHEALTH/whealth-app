import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Footer from "../../components/Footer";
import color from "../../styles/color";

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.page0}></View>

      {/* 페이지 표시 */}
      <View style={styles.page1}>
        <Text style={{ color: color.hc, fontSize: 35, fontWeight: "700" }}>
          설정
        </Text>
      </View>

      {/* 메뉴 선택지 - Article */}
      <View style={styles.page2}>
        <MaterialCommunityIcons
          name="face-profile"
          size={100}
          color={color.hc}
        />
        <Text style={{ color: color.hc, fontSize: 30, fontWeight: "700" }}>
          ㅇㅇㅇ 님 프로필
        </Text>
      </View>

      <View style={styles.page3}>
        <TouchableOpacity style={styles.settingMenu}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={color.bc}
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: color.hc, fontSize: 16 }}>Account</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={color.bc}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingMenu}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="bell-ring"
              size={24}
              color={color.bc}
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: color.hc, fontSize: 16 }}>Notification</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={color.bc}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingMenu}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="eye"
              size={24}
              color={color.bc}
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: color.hc, fontSize: 16 }}>Appearance</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={color.bc}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingMenu}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="security"
              size={24}
              color={color.bc}
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: color.hc, fontSize: 16 }}>
              Privacy & Security
            </Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={color.bc}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingMenu}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons
              name="cellphone-sound"
              size={24}
              color={color.bc}
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: color.hc, fontSize: 16 }}>Sound</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={color.bc}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.page4}>
        <Footer navigation={navigation} current="Setting"></Footer>
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
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: color.hc,
    borderTopColor: color.hc,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
  },
  page3: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  page4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: color.bc,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  settingMenu: {
    paddingHorizontal: "5%",
    paddingVertical: 10,
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Setting;
