import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/EnterOTP.svg"
import Colors from '../../Constants/Colors'
import { head1 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'
import BottomNavBar from '../../Components/BottomNavBar'

const EnterOtp = () => {

    const [underlineColor, setunderlineColor] = useState(Colors.color0)
    const [displayButton, setDisplayButton] = useState(0)

    var otpArray = []
    const handleInputBoxChange = (value) => {
        otpArray.push(value);
        console.debug(otpArray);
    }
    const ArrayValueHandler = (arr) => {
        if (arr.length === 5) {
            arr = []
        }
    }

    const otpMaker = () => {
        let otp = otpArray.join("");
        console.debug("otp = ", otp)
        console.debug(typeof otp)
        otp = Number(otp)
        console.debug(typeof otp)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageHolder}>
                <RegisterImage width={300} height={300} />
            </View>
            <KeyboardAvoidingView
                behavior='height'
            >
                <View style={styles.s2}>
                    <Text style={head1}>Enter OTP</Text>
                    <View style={styles.formgroup}>
                        <View style={styles.otpInputBoxes}>
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType={'numeric'}
                                onChangeText={(value) => { handleInputBoxChange(value); this.secondTextInput.focus(); }}
                                blurOnSubmit={false}
                                underlineColorAndroid={underlineColor}

                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType={'numeric'}
                                ref={(input) => { this.secondTextInput = input; }}
                                onChangeText={(value) => { handleInputBoxChange(value); this.thirdTextInput.focus(); }}
                                blurOnSubmit={false}
                                underlineColorAndroid={underlineColor}

                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType={'numeric'}
                                ref={(input) => { this.thirdTextInput = input; }}
                                onChangeText={(value) => { handleInputBoxChange(value); this.fourthTextInput.focus(); }}
                                blurOnSubmit={false}
                                underlineColorAndroid={underlineColor}

                            />
                            <TextInput
                                style={styles.input}
                                maxLength={1}
                                keyboardType={'numeric'}
                                ref={(input) => { this.fourthTextInput = input; }}
                                onChangeText={(value) => { handleInputBoxChange(value); otpMaker(); setDisplayButton(1) }}
                                underlineColorAndroid={underlineColor}

                            />
                        </View>
                        <View style={{ marginTop: 20 }}></View>
                    </View>
                    {displayButton ? <PrimaryButton style={styles.displayButton}>Verify</PrimaryButton> : null}

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default EnterOtp;

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
        padding: 15,
    },
    s2: {
        display: "flex",
        // backgroundColor:"bl",
        zIndex: -1,
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formgroup: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    otpInputBoxes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    label: {
        fontSize: 14,
        color: "rgba(0,0,0,0.7)",
        marginLeft: 10,
        marginBottom: 5,
        color: Colors.color4,
    },

    input: {
        textAlign: "center",
        color: Colors.color1,
        // backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 10,
        padding: 20,
        fontSize: 20,
    },
 
});




