import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import color from "../styles/color";

const Footer = (props) => {
  const [alarm, setAlarm] = useState(color.bc);
  const [menu, setMenu] = useState(color.bc);
  const [setting, setSetting] = useState(color.bc);
  useEffect(() => {
    props.current === "CurrentAlarm" ? setAlarm(color.hc) : undefined;
    props.current === "Menu" ? setMenu(color.hc) : undefined;
    props.current === "Setting" ? setSetting(color.hc) : undefined;
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("CurrentAlarm");
        }}
      >
        <MaterialCommunityIcons name="alarm" size={30} color={alarm} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Menu");
        }}
      >
        <MaterialCommunityIcons name="menu" size={30} color={menu} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Setting");
        }}
      >
        <AntDesign name="setting" size={30} color={setting} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Footer;
