import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar';
import Colors from '../../Constants/Colors';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'


const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <View style={styles.logo}>
                    <Iconborder name="instagram" size={35} color={Colors.color4} />
                </View>
                <View style={styles.Chaticons}>
                    <Pressable
                        style={({ pressed }) => pressed ? styles.pressed : styles.Chaticon}
                    // onPress={() => { manageColorChange(2) }}
                    >
                        <Iconborder name="pluscircleo" size={25} color={Colors.color4} />
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => pressed ? styles.pressed : styles.Chaticon}
                    // onPress={() => { manageColorChange(2) }}
                    >
                        <IonIcons name="chatbubbles-outline" size={25} color={Colors.color4} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.post}>
                <View style={styles.userDetails}>
                    <View style={styles.insideUserData}>
                        <Icon name="user-circle" size={25} color={Colors.color1} />
                    </View>
                    <View style={styles.insideUserData}>
                        <Text>User-name</Text>
                    </View>
                </View>
                <View style={styles.postData}>
                    <Image
                        style={styles.userPostImage}
                        source={
                            {
                                uri: 'data:image/jpeg;base64,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'
                            }}
                    />
                </View>
                <View style={styles.likeCommentShare}>
                    <Iconborder name="hearto" size={25} color={Colors.color1} />
                    <Icon name="comment-o" size={25} color={Colors.color1} />
                    <Icon name="paper-plane-o" size={25} color={Colors.color1} />
                    {/* <Iconborder name="comment" size={25} color={Colors.color4} />
                    <Iconborder name="paper-plane" size={25} color={Colors.color4} /> */}
                </View>
            </View>


            <BottomNavBar />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.color1
    },
    topBar: {
        flex: 1,
        backgroundColor: Colors.color1,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    logo: {
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
    Chaticons: {
        justifyContent: 'flex-end',
        flexDirection: "row"
    },
    Chaticon: {
        marginHorizontal: 10,
    },
    post: {
        flex: 6,
        backgroundColor: Colors.color2,
    },
    userDetails: {
        flex: 0.6,
        backgroundColor: Colors.color4,
        flexDirection: "row",
    },
    insideUserData: {
        flexDirection: "row",
        // alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    postData: {
        flex: 5,
        backgroundColor: Colors.color4,
        borderColor: Colors.color1,
        borderWidth: 1,
    },
    likeCommentShare: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 1,
        backgroundColor: Colors.color4,
        paddingVertical: 10,
    },
    userPostImage:{
        justifyContent:"center",
        alignSelf:'center',
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    pressed: {
        opacity: 0.5,
    }
})