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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontStyle: "normal",
    textAlign: "center",
  },
});
