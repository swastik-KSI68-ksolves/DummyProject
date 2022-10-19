import { StyleSheet } from "react-native";
import { IMAGE_HEIGHT_SMALL, IMAGE_HEIGHT } from "../Constants/ScreenSizes"

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        // paddingVertical: 5,
        // paddingHorizontal: 15,
        width: window.width - 30,
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    register: {
        marginBottom: 20,
        width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ffae',
    }
});