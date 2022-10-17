import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Colors from '../Constants/Colors';

const BottomNavBar = () => {
    // all variables 
    const [icon1Color, setIcon1Color] = useState(Colors.color4);
    const [icon2Color, setIcon2Color] = useState(Colors.color4);
    const [icon3Color, setIcon3Color] = useState(Colors.color4);
    const [icon4Color, setIcon4Color] = useState(Colors.color4);
    const [icon5Color, setIcon5Color] = useState(Colors.color4);


    const resetIconColor = () => {
        setIcon1Color(Colors.color4);
        setIcon2Color(Colors.color4);
        setIcon3Color(Colors.color4);
        setIcon4Color(Colors.color4);
        setIcon5Color(Colors.color4);
    }

    const manageColorChange = (iconNumber) => {
        resetIconColor();
        if (iconNumber === 1) {
            setIcon1Color(Colors.colorRedShade)
        }
        if (iconNumber === 2) {
            setIcon2Color(Colors.colorRedShade)
        }
        if (iconNumber === 3) {
            setIcon3Color(Colors.colorRedShade)
        }
        if (iconNumber === 4) {
            setIcon4Color(Colors.colorRedShade)
        }
        if (iconNumber === 5) {
            setIcon5Color(Colors.colorRedShade)
        }
    }


    return (
        <View style={styles.bottomNavBar}>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange(1) }}
                >
                    <Iconborder name="home" size={25} color={icon1Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange(2) }}
                >
                    <Iconborder name="search1" size={25} color={icon2Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange(3) }}
                >
                    <Iconborder name="pluscircleo" size={25} color={icon3Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange(4) }}
                >
                    <Iconborder name="hearto" size={25} color={icon4Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange(5) }}
                >
                    <Icon name="user-circle" size={25} color={icon5Color} />
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