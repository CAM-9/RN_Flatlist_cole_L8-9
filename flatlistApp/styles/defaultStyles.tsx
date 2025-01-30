// defaultStyles.tsx
import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  titleContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
  },
  textContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 16,
    color: colors.text.dark,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.light,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: colors.text.light,
  },
});

export default defaultStyles;
