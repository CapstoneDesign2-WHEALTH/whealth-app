import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import color from "../styles/color";

const myTextInput = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="yourareawesome@mail.com"
        placeholderTextColor={color.bc}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Password"
        placeholderTextColor={color.bc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 327,
    height: 46,
    paddingLeft: 20,
    margin: 5,
    borderColor: color.bc,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

export default myTextInput;
