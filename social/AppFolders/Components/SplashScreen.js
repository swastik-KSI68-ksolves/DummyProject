import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Image, Animated } from 'react-native'
import Colors from '../Constants/Colors'

const SplashScreen = () => {

    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        setTimeout(() => fadeIn(), 100);
    })

    useEffect(() => {
        setTimeout(() => fadeOut(), 3550);
    })

    return (
        <View style={styles.container}>
            <View style={styles.splashImg}>
                <Animated.View
                    style={
                        // Bind opacity to animated value
                        { opacity: fadeAnim }
                    }

                >
                    <Image source={require('../assets/images/ksolvesLogo.png')} />
                </Animated.View>
            </View>
        </View >
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.color4,
    },
    splashImg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})




