import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const Footer = (props) => {
  const [alarm, setAlarm] = useState("#a3cdf5");
  const [menu, setMenu] = useState("#a3cdf5");
  const [setting, setSetting] = useState("#a3cdf5");
  useEffect(() => {
    props.current === "CurrentAlarm" ? setAlarm("#145BC7") : undefined;
    props.current === "Menu" ? setMenu("#145BC7") : undefined;
    props.current === "Setting" ? setSetting("#145BC7") : undefined;
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
