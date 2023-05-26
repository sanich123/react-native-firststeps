import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  const { main, text } = styles;
  return (
    <View style={main}>
      <Text style={text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontStyle: "normal",
    textAlign: "center",
  },
});
