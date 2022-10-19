import React from 'react'
import { View, Text } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar'

const UserProfile = ({navigation}) => {
  return (
    <>
      <Text style={{ color: "#000" }}>
        user profile Screen
      </Text>
      <BottomNavBar navigation={navigation} activeIcon={5} />
    </>
  )
}

export default UserProfile