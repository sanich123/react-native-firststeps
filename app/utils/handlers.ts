import { Alert } from "react-native";

export const handleButtonClick = () =>
  Alert.alert(
    "Some title",
    "Some inner text",
    [
      { text: "Yes, please", onPress: () => console.log("Yes button have been fired") },
      { text: "No, dont", onPress: () => console.log("No button have been fired") },
    ],
    { cancelable: true }
  );

export const handleButtonClick2 = () => {
  Alert.alert("Some prompt", "Some text", [
    {
      text: "Submit",
      onPress: (text) => console.log(text),
    },
  ]);
};
