import { View, FlatList, Text } from "react-native";
import { useState } from "react";
import Header from "../components/header";
import ListItem from "../components/list-item";
import Form from "../components/form";

export default function TabOneScreen() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", id: "1" },
    { text: "Купить картошку", id: "2" },
    { text: "Купить машину", id: "3" },
    { text: "Стать миллионером", id: "4" },
  ]);

  function fetchTextFromComponent(text: string) {
    setListOfItems((list) => [{ text: text, id: Math.random().toString().substring(7) }, ...list]);
  }

  function deleteHandler(key: string) {
    setListOfItems((list) => list.filter(({ id }) => id !== key));
  }

  return (
    <View>
      <Header />
      <Form fetchTextFromComponent={fetchTextFromComponent} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem item={item} deleteHandler={deleteHandler} />}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}
