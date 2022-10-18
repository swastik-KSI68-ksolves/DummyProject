import React from 'react'
import { Text, View, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import Colors from '../Constants/Colors';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({ userName, ImageUri }) => {
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.post, { height: screenHeight }]}>
            <View style={styles.userDetails}>
                <View style={styles.insideUserData}>
                    <Image
                        style={styles.userAvatarImage}
                        source={ImageUri}
                    />
                </View>
                <View style={styles.insideUserData}>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
            </View>
            <View style={styles.postDataTop}>
                <View style={styles.postData}>
                    <Image
                        style={styles.userPostImage}
                        source={ImageUri}
                    />
                </View>

            </View>
            <View style={styles.likeCommentShare}>
                <View style={styles.threeLogo}>
                    <Iconborder name="hearto" size={25} color={Colors.color1} />
                </View>
                <View style={styles.threeLogo}>
                    <Icon name="comment-o" size={25} color={Colors.color1} />
                </View>
                <View style={styles.threeLogo}>
                    <Icon name="paper-plane-o" size={25} color={Colors.color1} />
                </View>
            </View>

        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: Colors.color2,
    },
    userDetails: {
        paddingLeft: 8,
        // flex: 0.4,
        backgroundColor: Colors.color4,
        flexDirection: "row",
    },
    insideUserData: {
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    postDataTop: {
        flex: 1.2,
        borderColor: Colors.color1,
        borderWidth: 1,
        backgroundColor: Colors.color4,
    },
    postData: {
        // flex: 2,
        backgroundColor: Colors.color4,
    },

    likeCommentShare: {
        flex:0.5,
        flexDirection: "row",
        backgroundColor: Colors.color4,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    userPostImage: {
        justifyContent: "center",
        alignSelf: 'center',
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    userAvatarImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.color1,
        padding: 5,

    },
    threeLogo: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    userName: {
        color: Colors.color1,
        fontSize: 16,
    },
})