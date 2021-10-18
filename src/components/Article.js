import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  article: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#EDECF4",
    paddingVertical: "10%",
    paddingHorizontal: "7%",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  article_text: {
    color: "#145BC7",
    fontSize: 30,
    fontWeight: "800",
  },
});
const Article = (props) => {
  return (
    <TouchableOpacity style={styles.article}>
      <Text style={styles.article_text}>{props.title}</Text>
      <MaterialCommunityIcons name={props.icon} size={40} color="black" />
    </TouchableOpacity>
  );
};

export default Article;
