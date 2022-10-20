import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar'
import Colors from '../../Constants/Colors'
import Iconborder from 'react-native-vector-icons/AntDesign';


const Search = ({ navigation }) => {
    return (
        <View style={StyleSheet.rootContainer}>
            <View style={style.searchBarContainer}>
                <Iconborder
                    name="search1"
                    size={25}
                    color={Colors.color01}
                    onPress={() => this.searchTextInput.focus()} />
                <TextInput
                    ref={(input) => { this.searchTextInput = input; }}
                    placeholder='"search"'
                    placeholderTextColor={Colors.color01}
                    style={style.searchBar}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </View>

            <View style={style.bottomContainer}>
                <BottomNavBar navigation={navigation} activeIcon={2} />
            </View>
        </View>
    )
}

export default Search;

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    bottomContainer: {
        height: "92%",
        backgroundColor: "white",
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    searchBar: {
        color: Colors.color1,
        paddingHorizontal: 20,
        color: Colors.color2,
        fontSize: 18,
    },
    searchBarContainer: {
        marginTop: 20,
        marginHorizontal: 10,
        height: "8%",
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.7)",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 30,
        borderColor: Colors.color3,
        borderWidth: 2,
    },
    searchBarText: {},
})