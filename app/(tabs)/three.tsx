import { SafeAreaView, Text, StyleSheet, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./three-styles";

export default function TabThree() {
  const handleButtonClick = () =>
    Alert.alert("Some title", "Some inner text", [
      { text: "Yes, please", onPress: () => console.log("Yes button have been fired") },
      { text: "No, dont", onPress: () => console.log("No button have been fired") },
    ]);
  const handleButtonClick2 = () => Alert.prompt("Some prompt", "Some text", (text) => console.log(text), "plain-text");
  const { container, textStyles } = styles;
  return (
    <SafeAreaView style={container}>
      <Text style={textStyles} onPress={() => console.log("You have pressed the text")}>
        another fucking text
      </Text>
      <Button title="Жмяк меня" color="red" onPress={handleButtonClick} />
      <Button title="Prompt click" color="yellow" onPress={handleButtonClick2} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
