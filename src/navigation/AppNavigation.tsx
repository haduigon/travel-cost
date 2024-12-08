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
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../assets/Logo.svg';

export function icon(color: string) {
  return <Ionicons2 name="newspaper-variant-outline" size={50} color={color} />;
}

export function icon2(color: string, name: string) {
  return <Ionicons name={name} size={40} color={color} />;
}

const Tab = createBottomTabNavigator();

function AppNavigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <Logo width={80} height={80} />
      </View>

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
            tabBarIcon: ({color}) => icon(color),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Travels"
          component={TravelsNavigation}
          options={{
            tabBarLabel: 'Travels',
            tabBarIcon: ({color}) => icon2(color, 'plane'),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => icon2(color, 'user'),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsNavigation}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => icon2(color, 'settings'),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export function headerLogo(route: string): React.JSX.Element {
  // console.log(route);

  return (
    <View style={styles.box}>
      <View style={styles.logoBox}>
        <Logo width={80} height={80} />
      </View>
      <View style={styles.newsBox}>
        <View style={styles.titleBox}>
          {icon('black')}
          <Text
            style={[
              styles.text,
              {
                marginLeft: 10,
              },
            ]}>
            {route}
          </Text>
          <Text>Newfovnpdgindpis</Text>
        </View>
      </View>
    </View>
  );
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
    width: '100%',
    marginTop: 20,
  },
  newsBox: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AppNavigation;
