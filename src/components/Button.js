import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import styled from "styled-components/native";
import color from "../styles/color";

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.bgcolor === "blue" ? color.hc : "#FFFFFF"};
  border-radius: 8px;
  padding: 10px 24px;
  margin: 7px 0px;
  justify-content: center;
  border: 1px solid #a3cfe5;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.bgcolor === "blue" ? "#FFFFFF" : color.hc)};
  text-align: center;
`;

const Button = (props) => {
  console.log(props);
  return (
    <ButtonContainer
      title={props.title}
      bgcolor={props.bgcolor}
      style={{
        height: 42,
        width: 327,
        top: 30,
      }}
      onPress={() => props.onPress()}
    >
      <Title title={props.title} bgcolor={props.bgcolor}>
        {props.title}
      </Title>
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Button;
