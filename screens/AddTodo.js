import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useAddTodo } from "../context/TodoContextProvider";
import "react-native-get-random-values"; // Importa antes de uuid
import { v4 as uuidv4 } from "uuid";

function AddTodo() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [isToday, setIsToday] = useState(false);
  const { addNewTodo } = useAddTodo();

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: "time",
      is24Hour: true,
      onChange: (event, selectedDate) => {
        if (selectedDate) setDate(selectedDate);
      },
    });
  };

  const setNewTodo = () => {
    if (!name.trim()) return; // Validar que el nombre no esté vacío

    const todo = {
      id: uuidv4(), // Generar un ID único
      name,
      hour: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isToday,
      isCompleted: false,
    };

    addNewTodo(todo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          placeholderTextColor="#00000030"
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <TouchableOpacity onPress={showTimePicker} style={styles.timeButton}>
          <Text style={styles.timeText}>
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.inputTitle}>Today</Text>
        <Switch value={isToday} onValueChange={setIsToday} />
      </View>
      <TouchableOpacity style={styles.button} onPress={setNewTodo}>
        <Text style={{ color: "#FFF" }}>Done</Text>
      </TouchableOpacity>
      <Text style={{ color: "#00000060" }}>
        If you disable today, the task will be considered as tomorrow
      </Text>
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#f8f8fa",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  timeButton: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
    alignItems: "center",
  },
  timeText: {
    fontSize: 18,
    color: "#000",
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 46,
    borderRadius: 11,
  },
});
