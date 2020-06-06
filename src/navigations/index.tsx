import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParams } from '../models'
import { SettingsScreen } from '../scenes'
import { HomeStackNavigation } from "./stacks/home-stack"


const TabNavigator = createBottomTabNavigator<RootStackParams>();
export class AppNavigation extends React.Component {

  render(): React.ReactNode {
    return (
      <NavigationContainer>
        // TODO: Authentication Stack
        <TabNavigator.Navigator initialRouteName="HomeStack">
          <TabNavigator.Screen name="HomeStack" component={HomeStackNavigation} initialParams={{ Home: { title: "Home" }, Details: { title: "Details" } }} />
          <TabNavigator.Screen name="Settings" component={SettingsScreen} initialParams={{ title: "Settings" }} />
        </TabNavigator.Navigator>
      </NavigationContainer>
    )
  }
}

