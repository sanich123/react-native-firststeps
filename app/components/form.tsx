import { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

type FormProps = {
  fetchTextFromComponent: (arg: string) => void;
};

export default function Form({ fetchTextFromComponent }: FormProps) {
  const { inputText, form } = styles;
  const [savedText, setSavedText] = useState("");

  return (
    <View style={form}>
      <TextInput style={inputText} onChangeText={(text) => setSavedText(text)} placeholder="Введите текст" />
      <Button
        title="Добавить задачу"
        color="green"
        onPress={() => {
          if (savedText.length > 1) {
            fetchTextFromComponent(savedText);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "20%",
    borderRadius: 10,
  },
  form: {
    flex: 1,
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 30,
  },
});
