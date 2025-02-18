import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";
import { useAddTodo } from "../context/TodoContextProvider";

export default function Todo({ newTodo }) {
  const { completedTodos } = useAddTodo();

  return (
    <View style={styles.container}>
      {newTodo?.map((t, index) => (
        <View key={index} style={styles.container}>
          <CheckBox id={t.id} isToday={t.isToday} hour={t.hour} isCompleted= {t.isCompleted} />
          <View>
            <Text
              style={
                completedTodos.has(t.id) && t.isToday
                  ? [
                      styles.text,
                      {
                        textDecorationLine: "line-through",
                        color: "#73737330",
                      },
                    ]
                  : styles.text
              }
            >
              {t.name}
            </Text>
            <Text
              style={
                completedTodos.has(t.id) && t.isToday
                  ? [
                      styles.time,
                      {
                        textDecorationLine: "line-through",
                        color: "#73737330",
                      },
                    ]
                  : styles.time
              }
            >
              {t.hour}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, flexDirection: "row", alignItems: "center" },
  text: { fontSize: 15, fontWeight: "500", color: "#737373" },
  time: { fontSize: 13, fontWeight: "500", color: "#a3a3a3" },
});
