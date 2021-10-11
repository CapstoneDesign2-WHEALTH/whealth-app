import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavigation = () =>{
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{cardStyle: {backgroundColor: '#ffffff'}}}
        >
            <Stack.Screen name = "Home" 
            component={Home} 
            options={{headerShown: false}}
            />
            <Stack.Screen name = "Login"
            component={Login}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
};

export default StackNavigation;