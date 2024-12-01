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
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../assets/Logo.svg';

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

const Tab = createBottomTabNavigator();

function AppNavigation(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#F20100',
          tabBarInactiveTintColor: 'black',
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 16,
            height: 80,
          },
          tabBarStyle: {
            height: 80,
          },
          tabBarIconStyle: {
            height: 60,
            width: 80,
          },
            headerStyle: {
            backgroundColor: 'none',
          },
          headerTitleContainerStyle: {
            width: '100%',
          },
          headerTitleAlign: 'center',
          headerTitle: () => headerLogo(route.name),
        })}>
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

function headerLogo(route: string): React.JSX.Element {
  return (
    <View style={styles.box}>
      <View style={styles.logoBox}>
        <Logo width={80} height={80} />
      </View>
      <View style={styles.newsBox}>
        <View style={styles.titleBox}>
      {icon('black')}
          <Text style={[styles.text, {
        marginLeft: 10,
          }]}>{route}</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logoBox: {
    marginTop: 20,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
  },
  newsBox: {
    width: '100%',
    // marginLeft: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});


export default AppNavigation;
