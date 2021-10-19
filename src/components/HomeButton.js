import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Touchable,
} from "react-native";
import { HomeButtonStyles } from "../styles/ButtonStyle";

/* default button component for signup/login  */
const HomeButton = (props) => {
  console.log(props);
  /* 
    contains three props for dynamic styles
    title, bgcolor, fontcolor
    */
  return (
    <TouchableOpacity
      style={[
        HomeButtonStyles.defaultButton,
        { backgroundColor: props.bgcolor },
      ]}
      onPress={() => props.onPress()}
    >
      <Text style={[HomeButtonStyles.defaultText, { color: props.fontcolor }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

HomeButton.defaultProps = {
  title: "ButtonInit",
  bgcolor: "bgcolorInit",
  fontcolor: "#FFFFFF",
};

export default HomeButton;
