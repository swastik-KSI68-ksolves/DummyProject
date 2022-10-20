import React, { useEffect, useRef, useState } from 'react'
import {
    View, StyleSheet, SafeAreaView, Keyboard,
    Text, TextInput, Dimensions, Animated, KeyboardAvoidingView
} from 'react-native'

import { head1, head2 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'
import Colors from '../../Constants/Colors'
import Lottie from 'lottie-react-native';


const Register = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidError, setpasswordValidError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidError, setconfirmPasswordValidError] = useState('');
    const imageContainer = useRef(new Animated.Value(1.5)).current;


    useEffect(() => {
        // componentWillMount 
        const keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', (event) => {
            // fadeInImageWithScaleHide();
            Animated.timing(imageContainer, {
                duration: event.duration,
                toValue: 5,
                useNativeDriver: false,
            }).start();
        });
        const keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', (event) => {
            // fadeInImageWithScale
            Animated.timing(imageContainer, {
                duration: event.duration,
                toValue: 1.5,
                useNativeDriver: false,
            }).start();
        });

        return () => {
            //   componentWillUnmount
            keyboardWillShowSub.remove();
            keyboardWillHideSub.remove();
        }
    }, [])


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

    //Password validation function
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

    //Password Match validation function
    const handleConfirmPasswordValidation = (value) => {
        if (password === value) {
            setconfirmPasswordValidError(null)
        }
        else {
            setconfirmPasswordValidError("Password don't match")
        }
    }



    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
        >
            <Animated.View
                style={{
                    width: "100%",
                    aspectRatio: imageContainer
                }}
            >
                <Lottie
                    autoPlay={true}
                    loop={true}
                    source={require('../../assets/Lottiefiles/register.json')}
                />
            </Animated.View>

            <Text style={head1}>Create a new account</Text>

            {emailValidError ? <Text style={[head2, { color: "red" }]}>{emailValidError}</Text> :
                passwordValidError ? <Text style={[head2, styles.passwordMsg]}> {passwordValidError} </Text> :
                    confirmPasswordValidError ? <Text style={[head2, styles.passwordMsg]}> {confirmPasswordValidError} </Text> :
                        <Text style={styles.link2}>Already registered?&nbsp;
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('login')}
                            >
                                Login here
                            </Text>
                        </Text>

            }

            <View style={styles.formgroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your Name"
                    placeholderTextColor={Colors.color3}
                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your Email"
                    placeholderTextColor={Colors.color3}
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                        setEmail(value)
                        handleEmailValidation(email)
                    }}
                    onPressIn={() => {
                        setEmailValidError(null);
                        setpasswordValidError(null);
                        setconfirmPasswordValidError(null);
                    }}      // remove error message on click 

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
                    onChangeText={(value) => {
                        setPassword(value)
                        handlePasswordValidationAlert(value)
                    }}
                    onPressIn={() => {
                        setEmailValidError(null);
                        setpasswordValidError(null);
                        setconfirmPasswordValidError(null)
                    }}
                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Confirm password</Text>
                <TextInput style={styles.input}
                    placeholderTextColor={Colors.color3}
                    placeholder="Enter your password again"
                    secureTextEntry={true}
                    value={confirmPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => {
                        setConfirmPassword(value)
                        handleConfirmPasswordValidation(value)
                    }}
                    onPressIn={() => {
                        setEmailValidError(null);
                        setpasswordValidError(null);
                        setconfirmPasswordValidError(null);
                    }
                    }

                />
            </View>
            <PrimaryButton
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('home')}
            >      Register      </PrimaryButton>
        </KeyboardAvoidingView >



    )
}

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
        paddingHorizontal: "5%"
    },
    imageHolder: {
        flex: 1,
        maxHeight: "30%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        zIndex: -1,
    },
    formgroup: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
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
    },
    buttonRegister: {
        backgroundColor: "#ff681c",

    }
})