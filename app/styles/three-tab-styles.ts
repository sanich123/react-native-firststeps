import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
  textStyles: {
    fontSize: 20,
    backgroundColor: "yellow",
  },
  box: {
    backgroundColor: 'orange',
    width: '50%',
    height: '25%',
    opacity: 0.7,
    borderWidth: 2,
    borderColor: 'blue',
    borderStyle: 'dotted',
    position: 'absolute',
    top: Platform.OS === 'ios' ? -15 : 64,
    left: 30,
  }
});
