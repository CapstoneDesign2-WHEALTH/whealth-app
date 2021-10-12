import React from "react";
import { Alert, Image } from "react-native";
import styled from "styled-components/native";
import Button from "../components/Button";

const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Image
        style={{ width: 356, height: 77, marginTop: 80 }}
        source={require("../../assets/wealthlogo.png")}
      />
      <Image
        style={{ width: 378, height: 350 }}
        source={require("../../assets/waterboy.png")}
      />
      <Button title="Sign Up" bgcolor="blue" onPress={() => alert("um hi")} />
      <Button
        title="Login"
        bgcolor="white"
        onPress={() => navigation.navigate("Login")}
      />
    </Container>
  );
};

export default Home;