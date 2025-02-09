import React from "react";
import { FlatList } from "react-native";
import Todo from "./Todo";

function TodoList({ todosData }) {
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo newTodo={[item]} />}
    />
  );
}

export default TodoList;
