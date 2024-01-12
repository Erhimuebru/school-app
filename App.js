import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { AuthProvider } from './Hooks/useAuth';
export default function App() {
  return (

     <NavigationContainer>
     < AuthProvider>
      <StackNavigator/>
      </AuthProvider>
     </NavigationContainer>

  );
}


