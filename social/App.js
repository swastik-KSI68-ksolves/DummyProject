import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { WelcomeScreen, Login, Register, EnterOtp, Home, Search, FollowScreen, UserProfile, Chat } from "./AppFolders/ModuleExports/index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "react-native-splash-screen"
// import firestore from "@react-native-firebase/firestore"


// const users = await firestore().collection('Users').get();
// console.debug(users)
// console.debug(usersCollection.doc(''))



const Stack = createNativeStackNavigator();

const App = () => {
  const [isVisible, setVisible] = useState(true);     // isVisible - if true show splash screen
  // const getUserData = async () => {
  //   const users = firestore().collection('Users').add({
  //     email: "swastik2@gmai;.com",
  //     name: "s2",
  //   });
  //   // console.debug("users = = ", users)
  //   users.then(sd => {
  //     console.debug('Total users: ', sd.size)
  //     console.debug('name: ', sd.docs)

  //   });
  //   return users;
  // }

  useEffect(() => {                         // show splash screen for some time 
    SplashScreen.hide()
    // getUserData();
  }, [])

  return (
    // <Home />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="login" component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="register" component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="enterOtp" component={EnterOtp}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="home" component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="search" component={Search}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="follow" component={FollowScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="profile" component={UserProfile}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="chats" component={Chat}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;