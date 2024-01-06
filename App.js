import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-red-500 h-full`}>
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold text-red-500`}>Hello twrnc!</Text>
    </View>
    </SafeAreaView>
  );
}


