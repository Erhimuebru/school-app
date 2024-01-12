import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useAuth from '../../Hooks/useAuth';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const LoginScreen = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
        </View>
    );
}

 
export default LoginScreen;