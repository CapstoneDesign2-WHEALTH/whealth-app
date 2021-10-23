import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Menu from "../screens/Menu";
import Setting from "../screens/FooterPages/Setting";
import CurrentAlarm from "../screens/FooterPages/CurrentAlarm";
import TodayDrink from "../screens/MenuPages/TodayDrink";
import SetAlarm from "../screens/MenuPages/SetAlarm";
import Chart from "../screens/MenuPages/Chart";
import Diagnosis from "../screens/MenuPages/Diagnosis";

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
        name="CurrentAlarm"
        component={CurrentAlarm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TodayDrink"
        component={TodayDrink}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetAlarm"
        component={SetAlarm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chart"
        component={Chart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Diagnosis"
        component={Diagnosis}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
