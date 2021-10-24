import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import TextInput from "../components/TextInput";
import HomeButton from "../components/HomeButton";
import color from "../styles/color";

const loginStyles = StyleSheet.create({
  container: {
    marginTop: "15%",
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
    color: color.bc,
  },
});

const Login = ({navigation}) => {
  return (
    <View style={loginStyles.container}>
      <Text style={[loginStyles.headerText, { marginTop: "10%" }]}>
        Welcome Back
      </Text>

      <Text
        style={[
          loginStyles.headerText,
          { fontSize: 40 },
          { marginBottom: "5%" },
        ]}
      >
        Login
      </Text>

      <Image
        style={{ width: "100%", height: "30%", marginBottom: "5%" }}
        source={require("../../assets/waterboy.png")}
      />
      <TextInput />

      <HomeButton
        title="Forgot Password?"
        fontcolor={color.bc}
        bgcolor="#FFFFFF"
        onPress={() => alert("forgot passwd")}
      />
      <HomeButton
        title="Login"
        fontcolor="#FFFFFF"
        bgcolor={color.bc}
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

export default Login;
