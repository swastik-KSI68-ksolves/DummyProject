import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, Keyboard, Text, TextInput, Dimensions, Animated, KeyboardAvoidingView } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/signup1.svg"
import { button1, head1, head2 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'
import Colors from '../../Constants/Colors'
import styling from '../../CommonStyling/StylingForRegisterAndLogin';
import { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "../../Constants/ScreenSizes"
import Lottie from 'lottie-react-native';


const Register = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidError, setpasswordValidError] = useState('');
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


    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
        >
            <Animated.View
                style={{
                    width: "100%",
                    aspectRatio: imageContainer
                    // height: () => {
                    //     let temp = `${imageContainer}+%`
                    //     console.debug(temp)
                    //     console.debug(typeof temp)
                    //     return String(imageContainer+"%")
                    // }
                }}
            >
                <Lottie
                    autoPlay={true}
                    loop={true}
                    source={require('../../assets/Lottiefiles/register.json')}
                // progress={imageContainer.current}
                // style={{
                //     resizeMode: 'contain',
                //     marginBottom: 20,
                //     padding: 10,
                //     marginTop: 20,
                //     // height: imageHeight,
                // }}
                />
            </Animated.View>


            {/* <Animated.Image source={require("../../assets/images/Signup/registerPng.png")}

                style={{
                    resizeMode: 'contain',
                    marginBottom: 20,
                    padding: 10,
                    marginTop: 20,
                    height: imageHeight,
                }}
            /> */}
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
                // onFocus={() => {
                //     fadeInImageWithScaleHide()
                //     // fadeOut();
                //     // setTimeout(() => {
                //     //     fadeInaForm();
                //     // }, 500)
                // }}    //image will be hidden 
                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}
                    placeholder="Enter your Email"
                    placeholderTextColor={Colors.color3}
                // onFocus={() => {
                //     fadeInImageWithScaleHide()
                //     // fadeOut();
                //     // setTimeout(() => {
                //     //     fadeInaForm();
                //     // }, 500)
                // }}     //image will be hidden 
                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password"
                    placeholderTextColor={Colors.color3}
                    secureTextEntry={true}
                // onFocus={() => {
                //     fadeInImageWithScaleHide()
                //     // fadeOut();
                //     // setTimeout(() => {
                //     //     fadeInaForm();
                //     // }, 500)
                // }}     //image will be hidden 

                />
            </View>
            <View style={styles.formgroup}>
                <Text style={styles.label}>Confirm password</Text>
                <TextInput style={styles.input}
                    placeholderTextColor={Colors.color3}
                    placeholder="Enter your password again"
                    secureTextEntry={true}
                // onFocus={() => {
                // fadeInImageWithScaleHide()
                // fadeOut();
                // setTimeout(() => {
                //     fadeInaForm();
                // }, 500)
                //image will be hidden

                // onBlur={() => {
                //     fadeInImageWithScale()
                //     // fadeIn();
                //     // makeformNormal();

                // }}    //image will be shown

                />
            </View>
            <PrimaryButton
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('home')}
            >      Register      </PrimaryButton>
        </KeyboardAvoidingView>



    )
}

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color4,
        paddingHorizontal:"5%"
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