import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Text, TextInput, Dimensions, Animated, KeyboardAvoidingView } from 'react-native'
import RegisterImage from "../../assets/images/SVGImages/signup1.svg"
import { button1, head1, head2 } from '../../CommonStyling/Common'
import PrimaryButton from '../../Components/PrimaryButton'
import Colors from '../../Constants/Colors'

const Register = ({ navigation }) => {
    //calculating screen width and height
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

   

    // Animated image and form using this
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translationimg = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;


    // const fadeIn = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 2000,
    //         useNativeDriver: false,
    //     }).start();
    // };


    // const fadeOut = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 0,
    //         duration: 1300,
    //         useNativeDriver: false,
    //     }).start();
    // };


    // const fadeInaForm = () => {
    //     Animated.timing(translation.y, {
    //         toValue: -100,
    //         duration: 1800,
    //         useNativeDriver: true,
    //     }).start();
    // };

    // const makeformNormal = () => {
    //     const fadeInaForm = () => {
    //         Animated.timing(translation.y, {
    //             toValue: 20,
    //             useNativeDriver: true,
    //         }).start();
    //     };
    // }

    const fadeInImageWithScaleHide = () => {
        Animated.parallel([
            Animated.timing(translationimg.y, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.timing(translation.y, {
                toValue: -60,
                duration: 2000,
                useNativeDriver: true,
            })
        ], { stopTogether: false }).start();
    }

    const fadeInImageWithScale = () => {
        Animated.parallel([
            Animated.timing(translationimg.y, {
                toValue: 20,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1800,
                useNativeDriver: true,
            }),
            Animated.timing(translation.y, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            })
        ], { stopTogether: false }).start();
    }


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

    useEffect(() => {
        fadeInImageWithScale();
    })


    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={
                    {
                        flex: 1,
                        maxHeight: "30%",
                        maxWidth: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 15,
                        zIndex: -1,
                        opacity: fadeAnim,
                        transform: [
                            { translateX: translationimg.x },
                            { translateY: translationimg.y },
                        ]
                    }
                }
            >
                <RegisterImage width={windowWidth * 0.6} height={windowHeight * 0.4} />
            </Animated.View>
            <Animated.View
                style={{
                    flex: 1,
                    display: "flex",
                    // zIndex: -1,
                    minWidth: "100%",
                    maxHeight: "60%",
                    paddingHorizontal: 20,
                    marginTop: 10,
                    transform: [
                        { translateX: translation.x },
                        { translateY: translation.y },
                    ]
                }}
            >
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
                        onFocus={() => {
                            fadeInImageWithScaleHide()
                            // fadeOut();
                            // setTimeout(() => {
                            //     fadeInaForm();
                            // }, 500)
                        }}    //image will be hidden 
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input}
                        placeholder="Enter your Email"
                        placeholderTextColor={Colors.color3}
                        onFocus={() => {
                            fadeInImageWithScaleHide()
                            // fadeOut();
                            // setTimeout(() => {
                            //     fadeInaForm();
                            // }, 500)
                        }}     //image will be hidden 
                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder="Enter your password"
                        placeholderTextColor={Colors.color3}
                        secureTextEntry={true}
                        onFocus={() => {
                            fadeInImageWithScaleHide()
                            // fadeOut();
                            // setTimeout(() => {
                            //     fadeInaForm();
                            // }, 500)
                        }}     //image will be hidden 

                    />
                </View>
                <View style={styles.formgroup}>
                    <Text style={styles.label}>Confirm password</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor={Colors.color3}
                        placeholder="Enter your password again"
                        secureTextEntry={true}
                        onFocus={() => {
                            fadeInImageWithScaleHide()
                            // fadeOut();
                            // setTimeout(() => {
                            //     fadeInaForm();
                            // }, 500)
                        }}    //image will be hidden 
                        onBlur={() => {
                            fadeInImageWithScale()
                            // fadeIn();
                            // makeformNormal();

                        }}    //image will be shown

                    />
                </View>
                <PrimaryButton
                    onPress={() => navigation.navigate('enterOtp')}
                >Register</PrimaryButton>
            </Animated.View>
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