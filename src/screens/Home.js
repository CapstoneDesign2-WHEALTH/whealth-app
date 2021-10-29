import React from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import HomeButton from "../components/HomeButton";
import color from "../styles/color";

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Image
        style={{ width: "100%", height: "10%", marginTop: "30%" }}
        source={require("../../assets/wealthlogo.png")}
      />
      <Image
        style={{ width: "100%", height: "50%", marginBottom: "10%" }}
        source={require("../../assets/waterboy.png")}
      />
      <HomeButton
        title="Sign Up"
        fontcolor="#FFFFFF"
        bgcolor={color.bc}
        onPress={() => alert("um hi")}
      />
      <HomeButton
        title="Login"
        fontcolor={color.bc}
        bgcolor="#FFFFFF"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
});

export default Home;
