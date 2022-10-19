import React from 'react'
import { View, Text } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar';


const FollowScreen = ({navigation}) => {
    return (
        <>
            <Text style={{ color: "#000" }}>
                Follow Screen
            </Text>
            <BottomNavBar navigation={navigation} activeIcon={4} />
        </>
    )
}

export default FollowScreen;