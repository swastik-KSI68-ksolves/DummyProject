import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, Animated, Easing, Image } from 'react-native'
import Colors from "../../Constants/Colors"
import LoginImage from "../../assets/images/SVGImages/LoginGirl.svg"
import { head1, head2, button1 } from "../../CommonStyling/Common"
import PrimaryButton from '../../Components/PrimaryButton'
import Lottie from 'lottie-react-native';
import styling from '../../CommonStyling/StylingForRegisterAndLogin'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const imageContainer = useRef(new Animated.Value(1.2)).current;


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
                toValue: 1.2,
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


            <Text style={head1}>Login</Text>
            {emailValidError ? <Text style={[head2, { color: "red" }]}>{emailValidError}</Text> :
                <Text style={head2}>Sign in to continue</Text>}

            <View style={styles.formgroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your Email"
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholderTextColor={Colors.color3}
                    onChangeText={(value) => {
                        setEmail(value)
                        handleEmailValidation(email)
                    }}
                    onPressIn={() => { setEmailValidError(null) }}      // remove error message on click 

                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"
                    placeholderTextColor={Colors.color3}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.fp}>
                <Text style={styles.link}>Forgot password?</Text>
            </View>
            <PrimaryButton
                style={styles.buttonLogin}
            >      Login      </PrimaryButton>


            <View>
                <Text style={styles.link2}>Don't have an account?&nbsp;
                    <Text style={styles.link}
                        onPress={() => navigation.navigate('register')}  //navigate to register screen
                    >
                        Create a new account
                    </Text></Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
        paddingHorizontal: "5%"
    },
    imageHolder: {
        flex: 2,
        maxHeight: "50%",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        zIndex: -1,
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
        paddingHorizontal: 10,
        width: "100%",
        margin: 5,
        marginVertical: 10,
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
    },
    buttonLogin: {
        backgroundColor: "#ff681c"
    }


})