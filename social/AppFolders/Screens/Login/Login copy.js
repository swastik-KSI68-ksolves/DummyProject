import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Dimensions, Animated } from 'react-native'
import Colors from "../../Constants/Colors"
import LoginImage from "../../assets/images/SVGImages/LoginGirl.svg"
import { head1, head2, button1 } from "../../CommonStyling/Common"
import PrimaryButton from '../../Components/PrimaryButton'

const Login = ({ navigation }) => {

    // calculating screen width and height
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };


    const [showHideImg, toggleshowHideImg] = useState(true);       //showHideImg is used to  toggle image when form focused 
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

    useEffect(() => {
        if (showHideImg) {
            fadeIn();
        }
        // setTimeout(() => fadeIn(), 100);
    })

    useEffect(() => {
        if (!showHideImg) {
            fadeOut();
        }
    })



    return (
        <SafeAreaView style={styles.container}>
            {showHideImg ?
                <Animated.View
                    style={
                        [styles.imageHolder, { opacity: fadeAnim }]
                    }
                >
                    <LoginImage width={windowWidth * 0.8} height={windowHeight * 0.4} />
                </Animated.View>
                : null}
            <KeyboardAvoidingView
                behavior='height'
            >
                <View style={styles.s2}>
                    <Text style={head1}>Login</Text>
                    {emailValidError ? <Text style={[head2, { color: "red" }]}>{emailValidError}</Text> :
                        passwordValidError ? <Text style={[head2, styles.passwordMsg]}> {passwordValidError} </Text> :
                            <Text style={head2}>Sign in to continue</Text>}

                    <View style={styles.formgroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}
                            placeholder="Enter your Email"
                            value={email}
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholderTextColor={Colors.color3}
                            onFocus={() => toggleshowHideImg(!showHideImg)}     //image will be hidden 
                            onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown
                            onChangeText={(value) => {
                                setEmail(value)
                                handleEmailValidation(email)
                            }}
                            onPressIn={() => setEmailValidError(null)}      // remove error message on click 

                        />
                    </View>
                    <View style={styles.formgroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} placeholder="Enter your password"
                            placeholderTextColor={Colors.color3}
                            secureTextEntry={true}
                            value={password}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onFocus={() => toggleshowHideImg(!showHideImg)}      //image will be hidden 
                            onBlur={() => toggleshowHideImg(!showHideImg)}      //image will be shown 
                            onChangeText={(value) => {
                                setPassword(value)
                                handlePasswordValidationAlert(value)
                            }}
                            onPressIn={() => { setEmailValidError(null) }}          // remove error message on click 
                        />
                    </View>
                    <View style={styles.fp}>
                        <Text style={styles.link}>Forgot password?</Text>
                    </View>
                    <PrimaryButton
                    // onPress={
                    //     () => 
                    // }
                    >Login</PrimaryButton>

                    <View>
                        <Text style={styles.link2}>Don't have an account?&nbsp;
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('register')}  //navigate to register screen
                            >
                                Create a new account
                            </Text></Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
    },
    imageHolder: {
        flex: 2,
        maxHeight: "50%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    s2: {
        display: "flex",
        zIndex: -1,
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingTop: 10,
    },
    formgroup: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 14,
        color: "rgba(0,0,0,0.7)",
        marginLeft: 10,
        marginBottom: 5,
        color: Colors.color4,
    },

    input: {
        // color: "rgba(0,0,0,0.7)",
        color: Colors.color1,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
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
        // color: "rgba(0,0,0,0.7)",
        marginTop: 10,
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