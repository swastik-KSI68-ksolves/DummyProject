import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../Constants/Colors';

const PrimaryButton = ({ children, onPress, style }) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable style={({ pressed }) => pressed
                ? [styles.innerContainer, styles.pressed, style]
                : [styles.innerContainer, style]}
                onPress={onPress}
                android_ripple={style ? { color: "red" } : { color: "#000ddd" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({

    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
        elevation: 10,


    },
    innerContainer: {
        backgroundColor: Colors.color0,
        paddingVertical: 15,
        paddingHorizontal: 15,
        elevation: 12,
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 21,
    },
    pressed: {
        // opacity: 0.8,
    }

})
