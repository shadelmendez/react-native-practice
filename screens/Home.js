import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TodoList from "../components/TodoList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { React, useState } from "react";
import { todosData } from "../data/todos";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    })
  );
  const [isHidden, setIsHidden] = useState(false);

  const handlePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(
        todosData.sort((a, b) => {
          return a.isCompleted - b.isCompleted;
        })
      );
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(localData.filter((todo) => !todo.isCompleted));
  };

  const navigation = useNavigation();
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMTY0OWI5NTUtY2UyOS00M2FhLWE1OWMtZGU2YzE0NzExYmJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            }}
            style={styles.image}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity
              style={{ color: "#3478f6" }}
              onPress={handlePress}
            >
              <Text>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
            </TouchableOpacity>
          </View>
          <TodoList todosData={localData.filter((item) => item.isToday)} />

          <Text style={styles.title}>Tomorrow</Text>
          <TodoList todosData={todosData.filter((item) => !item.isToday)} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Add")}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
