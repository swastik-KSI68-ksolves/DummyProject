import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Colors from "../Constants/Colors";
import Iconborder from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons'


const TopBar = ({ navigation, headerText, }) => {
    return (
        <View style={styles.topBar}>
            <Pressable
                style={[({ pressed }) => pressed ? styles.pressed : null, styles.Chaticon]}>
                <Iconborder
                    name="arrow-back-ios"
                    size={25}
                    color={Colors.color2}
                    onPress={() => navigation.goBack()}
                />
            </Pressable>
            <Text style={styles.topbarText}>{headerText}</Text>
            <Pressable
                style={[({ pressed }) => pressed ? styles.pressed : null, styles.Chaticon]}
            // onPress={() => { manageColorChange(2) }}
            >
                <IonIcons name="chatbubbles-outline" size={25} color={Colors.color2}
                    onPress={() => navigation.navigate('chats')}
                />
            </Pressable>

        </View>
    )
}

export default TopBar;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    topBar: {
        height: "10%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
    },
    topbarText: {
        color: Colors.color2,
        fontSize: 20,
    },

})