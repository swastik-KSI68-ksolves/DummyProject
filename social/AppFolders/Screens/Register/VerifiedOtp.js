import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/EnterOTP.svg"
import Colors from '../../Constants/Colors'

const VerifiedOtp = () => {
    return (
        <div>VerifiedOtp</div>
    )
}

export default VerifiedOtp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
    },
    imageHolder: {
        flex: 2,
        maxHeight: "55%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
})