import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import TextInput from "../components/TextInput";
import HomeButton from "../components/HomeButton";
import { HomeButtonStyles } from "../styles/ButtonStyle";

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
    color: "#A3CFE5",
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
        fontcolor="#A3CFE5"
        bgcolor="#FFFFFF"
        onPress={() => alert("forgot passwd")}
      />
      <HomeButton
        title="Login"
        fontcolor="#FFFFFF"
        bgcolor="#A3CFE5"
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

export default Login;
