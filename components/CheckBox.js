import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useAddTodo } from "../context/TodoContextProvider";

function CheckBox({ id, isToday, hour, isCompleted }) {
  const { completedTodos, toggleCompleted } = useAddTodo();

  return isToday ? (
    
    <Pressable
      style={({ pressed }) => [
        isCompleted ? styles.checked : styles.unchecked,
      ]}
      onPress={() => toggleCompleted(id)}
    >
      {isCompleted && (
        <Entypo name="check" size={16} color="#FAFAFA" />
      )}
    </Pressable>

  ) : (
    <View style={styles.isToday} />
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  unchecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    borderColor: "#E8E8E8",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#262626",
    marginRight: 13,
    marginLeft: 15,
  },
});
