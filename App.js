import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'
import Carosuel from './navigation/carosuel'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import OrderScreen from './screens/OrderScreen'
import RewardScreen from './screens/RewardScreen'
import ProfileScreen from './screens/ProfileScreen'
import RecentOrderScreen from './screens/RecentOrderScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import ProfileScreenAfterLogin from './screens/ProfileScreenAfterLogin'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Tabs'
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Order'
            component={OrderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='PastOrders' component={RecentOrderScreen} />
          <Stack.Screen name='Reward' component={RewardScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
          <Stack.Screen name='AboutUs' component={AboutUsScreen} />
          <Stack.Screen
            name='ProfileScreenAfterLogin'
            component={ProfileScreenAfterLogin}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
