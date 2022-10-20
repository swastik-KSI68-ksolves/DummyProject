import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../../Constants/Colors';
import Iconborder from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import TopBar from '../../Components/TopBar';


const Chat = ({navigation}) => {
    return (
        <View style={styles.rootContainer}>
        <TopBar navigation={navigation} headerText={"Chats"}/>
        </View>
    )
}

export default Chat;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "white",
    },

})