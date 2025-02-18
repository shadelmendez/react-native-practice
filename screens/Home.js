import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable
} from "react-native";
import TodoList from "../components/TodoList";
import { useNavigation } from "@react-navigation/native";
import { useAddTodo } from "../context/TodoContextProvider";
import Entypo from '@expo/vector-icons/Entypo';

export default function Home() {
  const { newTodo } = useAddTodo();
  const [isHidden, setIsHidden] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);


  const handlePress = () => {
    setIsHidden(!isHidden);
  };

  const filterTodos = (isToday) => {
    newTodo.filter((fua)=>console.log("fua ", fua))
    return newTodo.filter(
      (item) => item.isToday === isToday && (!isHidden || !item.isCompleted)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>

        <View>
        <View style={styles.row}>
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
          </TouchableOpacity>
        </View>
        <TodoList todosData={filterTodos(true)} />
        </View>

        <View>
        <Text style={styles.title}>Tomorrow</Text>
        <TodoList todosData={filterTodos(false)} />

        </View>

   
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
               <Pressable
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Done</Text>
              </Pressable> 
            </View>
          </View>
        </Modal>
    

       <View style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 30}}>
       <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Entypo name="pencil" size={24} color="white" />
        </TouchableOpacity>
       
       <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add")}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
       </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
    paddingVertical: 21
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
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  
  plus: {
    fontSize: 35,
    color: "#fff",
  },
  main:{
    flex: 1,
    justifyContent: "space-between"
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
