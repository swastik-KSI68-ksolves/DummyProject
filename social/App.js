import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { WelcomeScreen, Login, Register, EnterOtp } from "./AppFolders/ModuleExports/index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "react-native-splash-screen"

const Stack = createNativeStackNavigator();

const App = () => {
  const [isVisible, setVisible] = useState(true);     // isVisible - if true show splash screen

  useEffect(() => {                         // show splash screen for some time 
    SplashScreen.hide()
  }, [])



  // if (isVisible)
  //   return (<SplashScreen />)

  // if (!isVisible)
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;