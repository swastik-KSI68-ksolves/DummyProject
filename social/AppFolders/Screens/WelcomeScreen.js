import React from 'react';
import { View, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import Colors from '../Constants/Colors';
import WelcomeSvg from "../assets/images/SVGImages/WELCOME4img.svg"
import PrimaryButton from "../Components/PrimaryButton"
import { H1, H5, H6 } from '../Components/UI/Heading';

const WelcomeScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <WelcomeSvg width={windowWidth * 0.8} height={windowHeight * 0.4} />
            </View>
            <View style={styles.TextData}>
                <H1 style={styles.WelcomeText}>Hello</H1>
                <H6 style={styles.WelcomeTextSmall}>Become a part of our community..</H6>
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
        color: Colors.color1
    },
    WelcomeTextSmall: {
        fontFamily: "RobotoCondensed-Regular",
        color: Colors.color2,
        fontStyle: "italic",
    }

})