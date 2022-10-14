import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput, Dimensions } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/signup1.svg"
import { button1, head1, head2 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'
import Colors from '../../Constants/Colors'

const Register = ({ navigation }) => {
    //calculating screen width and height
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [showHideImg, toggleshowHideImg] = useState(1);
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidError, setpasswordValidError] = useState('');

    //Email validation function
    const handleEmailValidation = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError('email field is empty');
        } else if (reg.test(val) === false) {
            setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };

    const handlePasswordValidationAlert = (value) => {
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
        if (value.length === 0) {
            setpasswordValidError('password field is empty');
        } else if (strongPassword.test(value)) {
            setpasswordValidError("password - Strong");
            styles.passwordMsg = styles.PasswordStrong
        } else if (mediumPassword.test(value)) {
            setpasswordValidError("password - Medium");
            styles.passwordMsg = styles.PasswordMedium

        } else {
            setpasswordValidError("password - Weak");
            styles.passwordMsg = styles.PasswordWeak
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            {showHideImg ? <View style={styles.imageHolder}>
                <RegisterImage width={windowWidth * 0.8} height={windowHeight * 0.4} />
            </View> : null}
            <ScrollView style={styles.s2}>
                <Text style={head1}>Create a new account</Text>
                <Text style={styles.link2}>Already registered?&nbsp;
                    <Text style={styles.link}
                        onPress={() => navigation.navigate('login')}
                    >
                        Login here
                    </Text>
                </Text>
                {emailValidError ? <Text style={[head2, { color: "red" }]}>{emailValidError}</Text> :
                    passwordValidError ? <Text style={[head2, styles.passwordMsg]}> {passwordValidError} </Text> :
                        null}

                <View style={styles.formgroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Name"
                        placeholderTextColor={Colors.color3}
                        onFocus={() => toggleshowHideImg(!showHideImg)}     //image will be hidden 
                        onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Email"
                        placeholderTextColor={Colors.color3}
                        onFocus={() => toggleshowHideImg(!showHideImg)}     //image will be hidden 
                        onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder="Enter your password"
                        placeholderTextColor={Colors.color3}
                        secureTextEntry={true}
                        onFocus={() => toggleshowHideImg(!showHideImg)}     //image will be hidden 
                        onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown

                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Confirm password</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor={Colors.color3}
                        placeholder="Enter your password again"
                        secureTextEntry={true}
                        onFocus={() => toggleshowHideImg(!showHideImg)}     //image will be hidden 
                        onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown

                    />
                </View>
                <PrimaryButton
                    onPress={() => navigation.navigate('enterOtp')}
                >Register</PrimaryButton>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Register;
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
    s2: {
        display: "flex",
        // backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: -1,
        width: "100%",
        height: "45%",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    formgroup: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: 5,
    },
    label: {
        color: "rgba(0,0,0,0.7)",
        marginLeft: 10,
        color: Colors.color4,
    },
    input: {
        color: Colors.color1,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 20,
        padding: 10,
    },
    input1: {
        color: Colors.color1,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 10,
        padding: 10,
        height: 100,
    },
    link: {
        color: Colors.color01,
        fontSize: 15,

    },
    fp: {
        display: "flex",
        alignItems: "flex-end",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    link2: {
        color: Colors.color2,
        fontSize: 15,
        textAlign: "center",
    },
    passwordMsg: {
        color: "red"
    },
    PasswordStrong: {
        color: "green"
    },
    PasswordMedium: {
        color: "blue"
    },
    PasswordWeak: {
        color: "red"
    }
})