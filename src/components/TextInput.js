import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const myTextInput = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="yourareawesome@mail.com"
        placeholderTextColor="#A3CFE5"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Password"
        placeholderTextColor="#A3CFE5"
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
    borderColor: "#A3CFE5",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

export default myTextInput;
