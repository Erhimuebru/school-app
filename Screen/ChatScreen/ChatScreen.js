import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const ChatScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text> am the ChatScreen</Text>
            <Button title=' go to home' onPress={()=> navigation.navigate ('Home')}/>
        </View>
    );
}

 
export default ChatScreen;