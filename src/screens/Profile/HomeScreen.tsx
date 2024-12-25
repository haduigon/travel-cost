import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {User} from '../../types/types';
import {AppContext} from '../../context/AppContext';
const defaultface = require('../../assets/ex1.jpg');
import ProfileInput from '../../components/ProfileInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlyButton from '../../components/FlyButton';
import {ACTIONS} from '../../helpers/utils';

export default function HomeScreen(): React.JSX.Element {
  const {state, dispatch} = useContext(AppContext);
  const [user, setUser] = React.useState<User>(state.user);
  const imageSource = user?.image ? {uri: user.image} : defaultface;

  function updateUser(name: string, data: any) {
    setUser(prevUser => ({
      ...prevUser,
      [name]: data,
    }));
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function saveUser() {
    if (!emailPattern.test(user.email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }

    const properties = Object.values(user);
    const isEmpty = properties.filter(value => value.length < 2).length > 1;
    if (isEmpty) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    dispatch({type: ACTIONS.UPDATE_USER, payload: user});
    Alert.alert('Success', 'We saved your settings');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <View style={styles.box}>
        <Image
          source={imageSource}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginTop: 20,
          }}
        />
        <Text
          style={[
            styles.text,
            {
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 20,
            },
          ]}>
          Personal information
        </Text>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContent}
          extraScrollHeight={-100}
          enableOnAndroid>
          <View style={styles.row}>
            <ProfileInput
              title="Name: "
              onChangeText={text => updateUser('name', text)}
              value={user.name}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Surname: "
              onChangeText={text => updateUser('surname', text)}
              value={user.surname}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Email: "
              onChangeText={text => updateUser('email', text)}
              value={user.email}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Age: "
              onChangeText={text => updateUser('age', text)}
              value={user.age}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Phone: "
              onChangeText={text => updateUser('phone', text)}
              value={user.phone}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="About: "
              onChangeText={text => updateUser('about', text)}
              value={user.about}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>

      <FlyButton
        title="Save"
        onPress={saveUser}
        style={{
          bottom: 20,
          right: 40,
        }}
      />
      <FlyButton
        title="Cancel"
        onPress={() => console.log('Save')}
        style={{
          bottom: 20,
          right: 220,
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
  mainBlock: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
