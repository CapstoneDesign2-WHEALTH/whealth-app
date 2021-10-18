import React from "react";
import { Image } from "react-native";
import Button from "../components/Button";
import { StyleSheet, View, Text } from "react-native";
import TextInput from "../components/TextInput";

const styles = StyleSheet.create({
  container: {
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

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, { marginTop: 20 }]}>Welcome Back</Text>

      <Text style={[styles.headerText, { fontSize: 40 }, { marginBottom: 10 }]}>
        Login
      </Text>

      <Image
        style={{ width: 378, height: 220 }}
        source={require("../../assets/waterboy.png")}
      />
      <TextInput />

      <Button
        title="Forgot Password?"
        bgcolor="white"
        onPress={() => alert("I forgot password")}
      />

      <Button
        title="Login"
        bgcolor="blue"
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

export default Login;
