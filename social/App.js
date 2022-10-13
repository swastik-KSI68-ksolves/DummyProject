import React from 'react'
import { View } from 'react-native';
import { WelcomeScreen, Login, Register, EnterOtp } from "./AppFolders/ModuleExports/index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <EnterOtp />
    // k/b avoiding view
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