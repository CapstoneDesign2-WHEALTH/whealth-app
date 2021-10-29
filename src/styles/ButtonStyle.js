import { StyleSheet } from "react-native";
import color from "./color";
export const HomeButtonStyles = StyleSheet.create({
  defaultButton: {
    marginTop: 10,
    borderRadius: 8,
    justifyContent: "center",
    borderWidth: 1,
    width: "80%",
    height: "5%",
    borderColor: color.bc,
  },
  defaultText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "300",
  },
});
