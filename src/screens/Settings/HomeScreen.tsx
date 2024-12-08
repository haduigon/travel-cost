import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Image,
  KeyboardAvoidingView,
  Platform,
  Switch,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// import {User} from '../../types/types';
import {AppContext} from '../../context/AppContext';
// const defaultface = require('../../assets/ex1.jpg');
import ProfileInput from '../../components/ProfileInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlyButton from '../../components/FlyButton';
import {ACTIONS} from '../../helpers/utils';
import {Settings} from '../../types/types';
import DropDownPicker from 'react-native-dropdown-picker';

export default function HomeScreen(): React.JSX.Element {
  const {state, dispatch} = useContext(AppContext);
  const [settings, setSettings] = React.useState<Settings>(state.settings);

  // const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'USD', value: 'en'},
    {label: 'EUR', value: 'es'},
    {label: 'UAH', value: 'fr'},
    {label: 'Pounds', value: 'de'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'English', value: 'en'},
    {label: 'Espangol', value: 'es'},
    {label: 'French', value: 'fr'},
    {label: 'Deutch', value: 'de'},
  ]);

  function updateSettings(name: string, data: any) {
    setSettings(prevUser => ({
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
        <Text
          style={[
            styles.text,
            {
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
            },
          ]}>
          Common settings
        </Text>

        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContent}
          extraScrollHeight={-100}
          enableOnAndroid
          keyboardShouldPersistTaps="handled">
          <View
            style={[
              styles.row,
              {
                alignItems: 'center',
                width: '100%',
                marginLeft: '8%',
              },
            ]}>
            <Text
              style={{
                width: 75,
              }}>
              Currency:{' '}
            </Text>

            <View
              style={{
                width: '65%',
              }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="USD"
                style={{
                  borderColor: 'lightgrey',
                  marginLeft: '12%',
                }}
              />
            </View>
          </View>

          <View
            style={[
              styles.row,
              {
                alignItems: 'center',
                width: '100%',
                marginLeft: '8%',
                zIndex: open2 ? 1000 : 0,
              },
            ]}>
            <Text
              style={{
                width: 75,
              }}>
              Language:{' '}
            </Text>

            <View
              style={{
                width: '65%',
              }}>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                placeholder="English"
                style={{
                  borderColor: 'lightgrey',
                  marginLeft: '12%',
                }}
              />
            </View>
          </View>

          <View style={styles.row}>
            <ProfileInput
              title="Notifications: "
              // onChangeText={text => updateSettings('email', text)}
              // value={user.email}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Blacklist: "
              onChangeText={text => updateSettings('blacklist', text)}
              value={settings?.blacklist.join(', ')}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="About: "
              onChangeText={text => updateSettings('about', text)}
              value={settings?.about}
            />
          </View>
          <View style={styles.box}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 20,
                },
              ]}>
              Change password
            </Text>
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="Old password: "
              onChangeText={text => updateSettings('oldPassword', text)}
              value={settings?.oldPassword}
            />
          </View>
          <View style={styles.row}>
            <ProfileInput
              title="New password: "
              onChangeText={text => updateSettings('newPassword', text)}
              value={settings?.newPassword}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>

      <FlyButton
        title="Save"
        onPress={() =>
          dispatch({type: ACTIONS.UPDATE_SETTINGS, payload: settings})
        }
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});
