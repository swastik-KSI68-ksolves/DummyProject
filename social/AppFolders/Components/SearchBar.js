// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Pressable } from "react-native";
import Iconborder from 'react-native-vector-icons/AntDesign';
import Colors from "../Constants/Colors";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicker }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Iconborder name="search1" size={25} color={Colors.color01} />

                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicker(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (

                    <View>
                        <Pressable
                            style={({ pressed }) => pressed ? styles.pressed : null}
                            onPress={() => {
                                setSearchPhrase("")
                            }
                            }
                        >
                            <Iconborder name="search1" size={25} color={Colors.color1} />
                        </Pressable>
                    </View>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicker(false);
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: Colors.color3,
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: Colors.color3,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        color: "black"
    },
    pressed: {
        opacity: 0.5,
    }
});