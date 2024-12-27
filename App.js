import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./screens/AddTodo";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Add" component={AddTodo} />
        {/* <Stack.Screen
          name="Add"
          component={AddTodo}
          options={{ presentation: "modal" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
