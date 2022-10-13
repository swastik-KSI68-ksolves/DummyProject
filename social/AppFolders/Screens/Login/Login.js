import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollViewBase, ScrollView } from 'react-native'
import Colors from "../../Constants/Colors"
import LoginImage from "../../assets/images/SVGImages/LoginGirl.svg"
import { head1, head2, button1 } from "../../CommonStyling/Common"
import PrimaryButton from '../../Components/PrimaryButton'

const Login = ({ navigation }) => {
    const [showHideImg, toggleshowHideImg] = useState(1)
    return (
        <SafeAreaView style={styles.container}>
            {showHideImg ? <View style={styles.imageHolder}>
                <LoginImage width={300} height={300} />
            </View> : null}
            <KeyboardAvoidingView
                behavior='height'
                // keyboardVerticalOffset={80}
            >
                <View style={styles.s2}>
                    <Text style={head1}>Login</Text>
                    <Text style={head2}>Sign in to continue</Text>
                    <View style={styles.formgroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder="Enter your Email"
                            placeholderTextColor={Colors.color3}
                            onFocus={() => toggleshowHideImg(!showHideImg)}
                            onBlur={() => toggleshowHideImg(!showHideImg)}
                        />
                    </View>
                    <View style={styles.formgroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} placeholder="Enter your password"
                            placeholderTextColor={Colors.color3}
                            secureTextEntry={true}
                            onFocus={() => toggleshowHideImg(!showHideImg)}
                            onBlur={() => toggleshowHideImg(!showHideImg)}
                        />
                    </View>
                    <View style={styles.fp}>
                        <Text style={styles.link}>Forgot password?</Text>
                    </View>
                    <PrimaryButton>Login</PrimaryButton>

                    <View>
                        <Text style={styles.link2}>Don't have an account?&nbsp;
                            <Text style={styles.link}
                                onPress={() => navigation.navigate('register')}
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
        // backgroundColor:"bl",
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


})