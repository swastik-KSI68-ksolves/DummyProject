import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Colors from '../Constants/Colors';

const BottomNavBar = () => {

    const [colorChanged, setColorChanged] = useState('none');
    const [icon1Color, setIcon1Color] = useState(Colors.color4);
    const [icon2Color, setIcon2Color] = useState(Colors.color4);
    const [icon3Color, setIcon3Color] = useState(Colors.color4);
    const [icon4Color, setIcon4Color] = useState(Colors.color4);
    const [icon5Color, setIcon5Color] = useState(Colors.color4);

    // all variables 

    // const setIconColor = (icon, color = Colors.color0) => {
    //     icon = color
    // }

    const setOtherIconColor = (icon1 = true, icon2 = true, icon3 = true, icon4 = true, icon5 = true) => {
        if (icon1) {
            setIcon1Color(Colors.color4)
        }
        if (icon2) {
            setIcon2Color(Colors.color4)
        }
        if (icon3) {
            setIcon3Color(Colors.color4)
        }
        if (icon4) {
            setIcon4Color(Colors.color4)
        }
        if (icon5) {
            setIcon5Color(Colors.color4)
        }
    }

    const manageColorChange = (iconNumber) => {
        if (iconNumber === 'icon1') {
            setIcon1Color(Colors.colorRedShade)
        }
        if (iconNumber === 'icon2') {
            setIcon2Color(Colors.colorRedShade)
        }
        if (iconNumber === 'icon3') {
            setIcon3Color(Colors.colorRedShade)
        }
        if (iconNumber === 'icon4') {
            setIcon4Color(Colors.colorRedShade)
        }
        if (iconNumber === 'icon5') {
            setIcon5Color(Colors.colorRedShade)
        }
    }


    return (
        <View style={styles.bottomNavBar}>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange('icon1'); setOtherIconColor(false, true, true, true, true) }}
                >
                    <Iconborder name="home" size={25} color={icon1Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange('icon2'); setOtherIconColor(true, false, true, true, true) }}
                >
                    <Iconborder name="search1" size={25} color={icon2Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange('icon3'); setOtherIconColor(true, true, false, true, true) }}
                >
                    <Iconborder name="pluscircleo" size={25} color={icon3Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange('icon4'); setOtherIconColor(true, true, true, false, true) }}
                >
                    <Iconborder name="hearto" size={25} color={icon4Color} />
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={({ pressed }) => pressed ? styles.pressed : null}
                    onPress={() => { manageColorChange('icon5'); setOtherIconColor(true, true, true, true, false) }}
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