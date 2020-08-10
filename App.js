import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import Subscribe from './src/screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons';
import store from './src/store'
import {Provider, useSelector} from 'react-redux'


const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:'white',
    activeTabColor:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:'black',
    activeTabColor:"red"
  }
}

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const Home = () => {
  const {colors}=useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscriptions') {
            iconName = 'subscriptions'
          }
          else if (route.name === 'Notifications') {
            iconName = 'notifications'
          }
          else if (route.name === 'Library') {
            iconName = 'video-library'
          }

          return <MaterialIcons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTabColor,
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Subscribe} />
      <Tabs.Screen name="Explore" component={Subscribe} />
      <Tabs.Screen name="Subscriptions" component={Subscribe} />
      <Tabs.Screen name="Notifications" component={Subscribe} />
      <Tabs.Screen name="Library" component={Subscribe} />
    </Tabs.Navigator>
  )
}
export default () => {
  return (
    <Provider store={store}>
    <Navigation/>
  </Provider>

  )
}

export function Navigation() {
  let currentTheme=useSelector(state=>{
    return state.myDarkMode
  })
  return (

    <Provider store={store}>
    <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  )
}