import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.box}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.inputBox}>
            <Ionicons name="search-outline" size={40} color={'black'} />
            <TextInput
              style={styles.input}
            />
          </View>
          <View style={{
          marginLeft: 10,
          marginTop: 'auto',
          }}>
            <Ionicons name="today-outline" size={50} color={'black'} />
          </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
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
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    bottom: 20,
    right: 20,
  }
});
