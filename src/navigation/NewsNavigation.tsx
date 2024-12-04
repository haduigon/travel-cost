import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/News/HomeScreen';
import NewsItem from '../screens/News/NewsItem';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons3 from 'react-native-vector-icons/Ionicons';

function stackHeader(route: string) {
  return (
    <View style={styles.titleBox}>
      <Ionicons2 name="newspaper-variant-outline" size={50} color={'black'} />
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
      <Ionicons3 name="chevron-back" size={30} color={'black'} />
      <Ionicons2 name="newspaper-variant-outline" size={50} color={'black'} />
      <Text style={styles.text}>{route}</Text>
    </TouchableOpacity>
  );
}


const Stack = createNativeStackNavigator();

function NewsNavigation(): React.JSX.Element {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({  }) => ({
          header: () => stackHeader('News'),
        })}
      />
      <Stack.Screen
        name="News"
        component={NewsItem}
        options={({ navigation }) => ({
          header: () => stackHeaderBack('News', () => navigation.goBack()),
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

export default NewsNavigation;
