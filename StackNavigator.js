import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text} from 'react-native';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import ChatScreen from './Screen/ChatScreen/ChatScreen';
import LoginScreen from './Screen/LoginScreen/LoginScreen';
import useAuth from './Hooks/useAuth';
 
const Stack = createNativeStackNavigator()
 
const StackNavigator = () => {
    const {user} = useAuth;

    return (
      <Stack.Navigator>
        {user ? (
            <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
            </>
        ) :
        (

            <Stack.Screen name="Login" component={LoginScreen} />
        )

        }
  
      </Stack.Navigator>
    );
}

 
export default StackNavigator;