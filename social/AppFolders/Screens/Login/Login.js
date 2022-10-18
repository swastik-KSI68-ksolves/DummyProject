import React, { useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Dimensions, Animated, Easing, Image } from 'react-native'
import Colors from "../../Constants/Colors"
import LoginImage from "../../assets/images/SVGImages/LoginGirl.svg"
import { head1, head2, button1 } from "../../CommonStyling/Common"
import PrimaryButton from '../../Components/PrimaryButton'

const Login = ({ navigation }) => {
    // calculating screen width and height
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // all varable declaration start
    const [imgwidth, setImgWidth] = useState(windowWidth * 0.2);
    const [imgHeight, setimgHeight] = useState(windowHeight * 0.2);
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidError, setpasswordValidError] = useState('');
    // all varable declaration end




    // Animated image and form using this
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const imageContainer = useRef(new Animated.Value(0.5)).current;
    const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translationimg = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;



    const fadeInImageWithScaleHide = () => {

        Animated.parallel([
            Animated.timing(imageContainer, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true
            }),
            Animated.timing(translationimg.y, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1800,
                useNativeDriver: true,
            }),
            Animated.timing(translation.y, {
                toValue: -20,
                duration: 2000,
                useNativeDriver: true,
            })
        ], { stopTogether: false }).start();
    }

    const fadeInImageWithScale = () => {
        Animated.parallel([
            Animated.timing(translationimg.y, {
                toValue: 20,
                duration: 2500,
                useNativeDriver: true,
            }),
            Animated.timing(imageContainer, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1800,
                useNativeDriver: true,
            }),
            Animated.timing(translation.y, {
                toValue: 10,
                duration: 2000,
                useNativeDriver: true,
            })
        ], { stopTogether: true }).start();
    }


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
        fadeInImageWithScale();
    })


    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={{
                    flex: 2,
                    maxHeight: "50%",
                    maxWidth: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    zIndex: -1,
                    opacity: fadeAnim,
                    transform: [
                        { translateX: translationimg.x },
                        { translateY: translationimg.y },
                    ]
                }
                }
            >
                <Animated.View
                    style={{
                        transform: [
                            { scaleX: imageContainer },
                            { scaleY: imageContainer }
                        ]
                    }}
                >
                    <LoginImage height={windowWidth * 0.8} width={windowHeight * 0.4} />
                </Animated.View>
                {/* <Image
                    source={require("../../assets/images/SVGImages/LoginGirl.svg")}
                    style={{ maxHeight: 50, maxWidth: 50 }}
                /> */}
            </Animated.View>
            <KeyboardAvoidingView
                behavior='height'
                keyboardVerticalOffset={-200}
            >


                <Animated.View
                    style={{
                        display: "flex",
                        zIndex: -1,
                        width: "100%",
                        height: "60%",
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        padding: 20,
                        paddingTop: 10,
                        transform: [
                            { translateX: translation.x },
                            { translateY: translation.y },
                        ]
                    }}
                >
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
                            onFocus={() => {
                                fadeInImageWithScaleHide();
                                // setTimeout(() => {
                                //     fadeInaForm();
                                // }, 500)
                            }}     //image will be hidden 
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
                            onFocus={() => {
                                fadeInImageWithScaleHide();
                                // setTimeout(() => {
                                //     fadeInaForm();
                                // }, 500)
                            }}     //image will be hidden 
                            onBlur={() => {
                                fadeInImageWithScale();
                                // makeformNormal();

                            }}      //image will be shown
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
                    >Login</PrimaryButton>

                    <View>
                        <Text style={styles.link2}>Don't have an account?&nbsp;
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('register')}  //navigate to register screen
                            >
                                Create a new account
                            </Text></Text>
                    </View>
                </Animated.View>


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