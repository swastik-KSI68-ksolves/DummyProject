import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Colors from '../Constants/Colors'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.splashImg}>
                <Image source={require('../assets/images/ksolvesLogo.png')} />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.color4,
    },
    splashImg: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
})