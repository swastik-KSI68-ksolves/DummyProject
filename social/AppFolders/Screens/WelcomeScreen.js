import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../Constants/Colors';
import WelcomeSvg from "../assets/images/SVGImages/WELCOME4img.svg"
import PrimaryButton from "../Components/PrimaryButton"

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <WelcomeSvg width={350} height={350} />
            </View>
            <View style={styles.TextData}>
                <Text style={styles.WelcomeText}>Welcome</Text>
                <Text style={styles.WelcomeTextSmall}>Become a part of our community..</Text>
            </View>
            <View style={styles.ButtonData}>
                <PrimaryButton
                    onPress={() => navigation.navigate('login')}
                >Login</PrimaryButton>
                <View style={{ paddingVertical: 5 }}></View>
                <PrimaryButton style={styles.buttonStyle2}
                    onPress={() => navigation.navigate('register')}
                >Register</PrimaryButton>
            </View>
        </View>
    )
}

export default WelcomeScreen;

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
        // justifyContent: "center"
    },
    TextData: {
        flex: 1,
        // paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    ButtonData: {
        flex: 1,
        paddingHorizontal: 50,
        alignContent: "center",
        justifyContent: "center",
    },
    NextDataHolder: {

    },
    PressableButton: {
        padding: 20,
        backgroundColor: Colors.color0,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonStyle2: {
        backgroundColor: Colors.colorRedShade,
    },
    WelcomeText: {
        fontFamily: "Merienda-Bold",
        fontSize: 50,
        color: Colors.color1
    },
    WelcomeTextSmall: {
        fontFamily: "RobotoCondensed-Regular",
        fontSize: 20,
        color: Colors.color2
    }

})