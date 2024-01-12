import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const HomeScreen = () => {
    const navigation =useNavigation()
    return (
        <View style={styles.container}>
            <Text> am the HomeScreen</Text>
          <Button title=' go to chat' onPress={()=>{
            navigation.navigate('Chat');
          }}/>
        </View>
    );
}

 
export default HomeScreen;