import React from 'react'
import { Text, View } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar'

const Search = ({ navigation }) => {
    return (
        <>
            <Text style={{ color: "#000" }}>
                Search Screen
            </Text>
            <BottomNavBar navigation={navigation} activeIcon={2} />
        </>
    )
}

export default Search