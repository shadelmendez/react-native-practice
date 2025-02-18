import React, { createContext, useContext, useState } from "react";

const AddTodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [newTodo, setNewTodo] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(new Set());
  const [completed, setCompleted]=useState([])

  const addNewTodo = (todo) => {
    const exists = newTodo.some(
      (existingTodo) =>
        existingTodo.name === todo.name && existingTodo.hour === todo.hour
    );
    if (!exists) {
      setNewTodo((prevTodos) => [...prevTodos, todo]);
    }
  };

  const toggleCompleted = (id) => {
    setNewTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  
    setCompletedTodos((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return new Set(updated);
    });
  };
  

  return (
    <AddTodoContext.Provider
      value={{ newTodo, addNewTodo, completedTodos, toggleCompleted }}
    >
      {children}
    </AddTodoContext.Provider>
  );
};

export const useAddTodo = () => useContext(AddTodoContext);
