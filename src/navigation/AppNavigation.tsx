/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsNavigation from './NewsNavigation';
import TravelsNavigation from './TravelsNavigation';
import ProfileNavigation from './ProfileNavigation';
import SettingsNavigation from './SettingsNavigation';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function AppNavigation(): React.JSX.Element {
  function icon(color: string) {
    return (
      <Ionicons2 name="newspaper-variant-outline" size={50} color={color} />
    );
  }
  
  function icon2(color: string, name: string) {
    return (
      <Ionicons name={name} size={40} color={color} />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#F20100',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16,
            height: 80,
          },
          tabBarStyle: {
            height: 120,
          },
          tabBarIconStyle: {
            height: 60,
            width: 80,
          }
        }}>
        <Tab.Screen
          name="News"
          component={NewsNavigation}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({color}) => (icon(color)),
          }}
        />
        <Tab.Screen
          name="Travels"
          component={TravelsNavigation}
          options={{
            tabBarLabel: 'Travels',
            tabBarIcon: ({color}) => icon2(color, 'plane'),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => icon2(color, 'user'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsNavigation}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => icon2(color, 'settings'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
