import { View, FlatList, Text } from "react-native";
import { useState } from "react";
import { INITIAL_STATE } from "../utils/const";
import Header from "../components/header";
import ListItem from "../components/list-item";
import Form from "../components/form";
import { useAddTodos } from "../hooks/useAddTodo";

export default function TabOneScreen() {
  const { fetchTextFromComponent, deleteHandler, listOfItems } = useAddTodos();

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
