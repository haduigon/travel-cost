import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Profile/HomeScreen';
import Ionicons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons3 from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';



function stackHeader(route: string) {
  return (
    <View style={styles.titleBox}>
      <Ionicons name="user" size={50} color={'black'} />
      <Text style={styles.text}>{route}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function ProfileNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => stackHeader('Profile'),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  backButton: {
    marginLeft: 10,
    padding: 5,
  },
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
    marginTop: 20,
    width: '100%',
    marginLeft: 20,
  },
  newsBox: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});

export default ProfileNavigation;
