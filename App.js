import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./screens/AddTodo";
import { TodoContextProvider } from "./context/TodoContextProvider";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TodoContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={AddTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContextProvider>
  );
}
