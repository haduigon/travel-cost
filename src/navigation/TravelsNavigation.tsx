import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Travels/HomeScreen';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import NewTravel from '../screens/Travels/NewTravel';
import Ionicons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons3 from 'react-native-vector-icons/Ionicons';
import TravelItem from '../screens/Travels/TravelItem';

type StackParamList = {
  Home: undefined;
  NewTravel: undefined | any;
  TravelItem: {route: string, item: any};
};


function stackHeader(route: string) {
  return (
    <View style={styles.titleBox}>
      <Ionicons name="plane" size={50} color={'black'} />
      <Text style={styles.text}>{route}</Text>
    </View>
  );
}

function stackHeaderBack(route: string, onPress?: () => void) {
  return (
    <TouchableOpacity
      style={styles.titleBox}
      onPress={onPress}
    >
      <Ionicons3 name="chevron-back" size={40} color={'black'} />
      <Ionicons2 name="newspaper-variant-outline" size={50} color={'black'} />
      <Text style={styles.text}>{route}</Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator<StackParamList>();

function TravelsNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => stackHeader('Travels'),
        }}
      />
      <Stack.Screen
        name="NewTravel"
        component={NewTravel}
        options={({navigation}) => ({
          header: () => stackHeaderBack('New Travel', () => navigation.goBack()),
        })}
      />
      <Stack.Screen
        name="TravelItem"
        component={TravelItem}
        options={({navigation}) => ({
          header: () => stackHeaderBack('TravelItem', () => navigation.goBack()),
        })}
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

export default TravelsNavigation;
