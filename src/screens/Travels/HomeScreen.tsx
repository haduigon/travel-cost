import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../../context/AppContext';

const defPic = require('../../assets/pic2.png');


function listItem({item, navigation}: {item: any; navigation: any}) {
  console.log(item, 'item');

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TravelItem', {item: item});
      }}>
      <View style={styles.itemBox}>
        <View style={styles.leftSide}>
          <View>
            {item.image ? (
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            ) : (
              <Image
                source={defPic}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            )}
          </View>
          <Text style={styles.text}>Description: {item.description}</Text>
        </View>

        <ScrollView>
          <Text style={styles.title}>Name: {item.name}</Text>
          <Text style={styles.text}>Place: {item.place}</Text>
          <Text style={styles.text}>Period: {item.time}</Text>
          <Text style={styles.text}>Team: {item.team}</Text>
          <Text style={styles.text}>Budget: {item.budget}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: 120,
              marginTop: 10,
              borderRadius: 5,
              padding: 5,
            }}>
            <Text style={{
              color: 'white',
            }}>Add participant</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({navigation}: any): React.JSX.Element {
  const { state } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [travels, setTravels] = useState(state.travels);

  useEffect(() => {
    setTravels(state.travels);
  }, [state.travels]);

  useEffect(() => {
    setTravels(state.travels.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase())));
  },[search, state.travels]);

  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.inputBox}>
          <Ionicons name="search-outline" size={40} color={'black'} />
          <TextInput style={styles.input} onChangeText={(text) => setSearch(text)}/>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginTop: 'auto',
          }}>
          <Ionicons name="today-outline" size={50} color={'black'} />
        </View>
      </View>
      <FlatList
        data={travels}
        keyExtractor={item => item.name}
        renderItem={({item}) => listItem({item, navigation})}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('NewTravel');
        }}>
        <Ionicons name="add-circle" size={70} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginLeft: 20,
  },
  input: {
    height: 40,
    borderColor: 'none',
    backgroundColor: '#fff',
    width: '70%',
  },
  inputBox: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 20,
    padding: 5,
  },
  addButton: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    bottom: 20,
    right: 20,
  },
  itemBox: {
    flexDirection: 'row',
    width: '100%',
    // alignItems: 'center',
    marginTop: 10,
  },
  leftSide: {
    // width: '20%',
    marginRight: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
  },
});
