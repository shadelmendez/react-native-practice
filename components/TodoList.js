import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList, Text } from "react-native";
import Todo from "./Todo";

function TodoList() {
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
    />
  );
}

export default TodoList;
