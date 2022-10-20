import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Pressable, Image, FlatList, RefreshControl, Dimensions } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar';
import Colors from '../../Constants/Colors';
import Iconborder from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Post from '../../Components/Post';


const Home = ({ navigation }) => {
    const [postDetails, setpostDetails] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const screenHeight = Dimensions.get('window').height;

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const getUsersFromApi = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setpostDetails(json.users);
        } catch (error) {
            console.error(error);
        }
    };

    const renderPostData = (postData) => {
        const name = postData.firstName + " " + postData.lastName
        let postImg = {
            uri: postData.image
        }
        return (
            <Post userName={name} ImageUri={postImg} />
        )
    }
    useEffect(() => {
        getUsersFromApi();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <View style={styles.logo}>
                    <Text
                        style={styles.logoText}
                    >Social</Text>
                </View>
                <View style={styles.Chaticons}>
                    <Pressable
                        style={[({ pressed }) => pressed ? styles.pressed : null, styles.Chaticon]}
                    // onPress={() => { manageColorChange(2) }}
                    >
                        <Iconborder name="pluscircleo" size={25} color={Colors.color1}
                        />
                    </Pressable>

                    <Pressable
                        style={[({ pressed }) => pressed ? styles.pressed : null, styles.Chaticon]}
                    // onPress={() => { manageColorChange(2) }}
                    >
                        <IonIcons name="chatbubbles-outline" size={25} color={Colors.color1}
                            onPress={() => navigation.navigate('chats')}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.posts}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={Object.keys(postDetails)}
                    renderItem={({ item }) => (renderPostData(postDetails[item]))}
                    style={styles.scrollView}
                    keyExtractor={(item, index) => {
                        return postDetails[item].id;
                    }}
                />
            </View>
            <View style={styles.BottomNavBar}>
                <BottomNavBar navigation={navigation} activeIcon={1} />
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    posts: {
        flex: 4,
        backgroundColor: Colors.color3,
    },
    scrollView: {
        backgroundColor: Colors.color4
    },
    container: {
        flex: 1,
        backgroundColor: Colors.color1
    },
    topBar: {
        flex: 0.5,
        backgroundColor: Colors.color4,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    BottomNavBar: {
        backgroundColor: Colors.color1,
    },
    logo: {
        justifyContent: 'flex-start',
        flexDirection: "row",
        padding: 5,
    },
    logoText: {
        color: Colors.color1,
        fontSize: 35,
        fontFamily: "Cookie-Regular",
        paddingLeft: 10,
    },

    Chaticons: {
        justifyContent: 'flex-end',
        flexDirection: "row"
    },
    Chaticon: {
        marginHorizontal: 10,
        padding: 5,
    },

    pressed: {
        opacity: 0.5,
    }
})