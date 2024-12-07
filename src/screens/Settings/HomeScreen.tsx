import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {User} from '../../types/types';
import {AppContext} from '../../context/AppContext';
// const defaultface = require('../../assets/ex1.jpg');
import ProfileInput from '../../components/ProfileInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlyButton from '../../components/FlyButton';
import { ACTIONS } from '../../helpers/utils';

export default function HomeScreen(): React.JSX.Element {
  const {state, dispatch} = useContext(AppContext);
  const [user, setUser] = React.useState<User>(state.user);
  // const imageSource = user?.image ? {uri: user.image} : defaultface;

  function updateUser(name: string, data: any) {
    setUser(prevUser => ({
      ...prevUser,
      [name]: data,
    }));
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <View style={styles.box}>

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
        onPress={() => dispatch({type: ACTIONS.UPDATE_USER, payload: user})}
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
