import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import TodoList from "../components/TodoList";
import { useNavigation } from "@react-navigation/native";
import { useAddTodo } from "../context/TodoContextProvider";

export default function Home() {
  const { newTodo } = useAddTodo();
  const [isHidden, setIsHidden] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setIsHidden(!isHidden);
  };

  const filterTodos = (isToday) => {
    return newTodo.filter(
      (item) => item.isToday === isToday && (!isHidden || !item.isCompleted)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/M/MV5BMTY0OWI5NTUtY2UyOS00M2FhLWE1OWMtZGU2YzE0NzExYmJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.row}>
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
          </TouchableOpacity>
        </View>
        <TodoList todosData={filterTodos(true)} />

        <Text style={styles.title}>Tomorrow</Text>
        <TodoList todosData={filterTodos(false)} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    margin: 10,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -6,
    left: 9,
  },
});
