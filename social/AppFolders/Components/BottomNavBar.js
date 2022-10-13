import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Colors from '../Constants/Colors';
// import { Icon } from 'react-native-vector-icons/an';

const BottomNavBar = () => {
    return (
        <View style={styles.bottomNavBar}>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                >
                    <Iconborder name="home" size={25} color={Colors.color4} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                >
                    <Iconborder name="search1" size={25} color={Colors.color4} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                >
                    <Iconborder name="pluscircleo" size={25} color={Colors.color4} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                >
                    <Iconborder name="hearto" size={25} color={Colors.color4} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                >
                    <Icon name="user-circle" size={25} color={Colors.color4} />
                </Pressable>
            </View>
        </View>
    )
}

export default BottomNavBar;

const styles = StyleSheet.create({
    bottomNavBar: {
        minwidth: '100%',
        minHeight: 50,
        padding: 10,
        backgroundColor: Colors.color1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    pressed: {
        opacity: 0.5,
    }
})