import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Menu from "../screens/Menu";
import Setting from "../screens/Setting";
import Alarm from "../screens/Alarm";
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "#ffffff" } }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />

    <Stack.Screen
        name="Alarm"
        component={Alarm}
        options={{ headerShown: false }}
      />  
    </Stack.Navigator>
  );
};

export default StackNavigation;
