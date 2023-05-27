import { useState } from "react";
import { INITIAL_STATE } from "../utils/const";

export function useAddTodos() {
  const [listOfItems, setListOfItems] = useState(INITIAL_STATE);
  function fetchTextFromComponent(text: string) {
    setListOfItems((list) => [{ text: text, id: Math.random().toString(36).substring(7) }, ...list]);
  }

  function deleteHandler(key: string) {
    setListOfItems((list) => list.filter(({ id }) => id !== key));
  }
  return {
    listOfItems,
    fetchTextFromComponent,
    deleteHandler,
  };
}
