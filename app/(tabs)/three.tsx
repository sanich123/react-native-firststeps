import { SafeAreaView, Text, Button, Alert, Image, TouchableWithoutFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/three-tab-styles";
import { anotherStyles } from "../styles/another-styles";
import { handleButtonClick, handleButtonClick2 } from "../utils/handlers";


export default function TabThree() {
  const { container, textStyles, box } = styles;
  const { text } = anotherStyles;

  return (
    <SafeAreaView style={container}>
      <View style={box}>
        <Text style={[text, textStyles]} onPress={() => console.log("You have pressed the text")}>
          another fucking text
        </Text>
      </View>
      <Button title="Жмяк меня" color="red" onPress={handleButtonClick} />
      <Button title="Prompt click" color="yellow" onPress={handleButtonClick2} />
      <TouchableWithoutFeedback onPress={handleButtonClick}>
        <Image blurRadius={1} source={{ width: 200, height: 150, uri: "https://klavogonki.ru/storage/avatars/122937_big.png?updated=1388208931" }} />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
