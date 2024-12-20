import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import NewTravelInput from '../../components/NewTravelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlyButton from '../../components/FlyButton';
import {ACTIONS} from '../../helpers/utils';
import {Travel} from '../../types/types';
import {AppContext} from '../../context/AppContext';
import {launchImageLibrary} from 'react-native-image-picker';

export default function NewTravel({navigation}: any): React.JSX.Element {
  const {dispatch} = useContext(AppContext);

  const initialTravel: Travel = {
    name: '',
    place: '',
    date: '',
    team: '',
    budget: '',
    description: '',
    statistics: '',
    graphics: '',
    comments: '',
    image: '',
  };

  const [newTravel, setNewTravel] = useState<Travel>(initialTravel);

  const handleAddTravel = () => {
    if (newTravel.name.length > 0) {
      dispatch({
        type: ACTIONS.ADD_TRAVEL,
        payload: newTravel,
      });
      setNewTravel(initialTravel);
    }
    navigation.goBack();
  };

  function handleChangeTravel(value: string, key: string) {
    setNewTravel({
      ...newTravel,
      [key]: value,
    });
  }

  const pickImageFromGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (!result.didCancel && result.assets && result.assets[0].uri) {
        const uri = result.assets[0].uri;
        handleChangeTravel(uri, 'image');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        extraScrollHeight={-100}
        enableOnAndroid>
        {newTravel.image.length > 0 ? (
          <View>
            <Image
              source={{uri: newTravel.image}}
              style={{
                width: 400,
                height: 150,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          </View>
        ) : (
          <View style={styles.topBlock}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 30,
              }}>
              Add image
            </Text>
          </View>
        )}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.addImgButton}
            onPress={pickImageFromGallery}>
            <Text style={styles.text}>Download image</Text>
          </TouchableOpacity>

          <NewTravelInput
            title="Name"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) => handleChangeTravel(value, 'name')}
          />
          <NewTravelInput
            title="Place"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) => handleChangeTravel(value, 'place')}
          />
          <NewTravelInput
            title="Time"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) => handleChangeTravel(value, 'time')}
          />
          <NewTravelInput
            title="Team"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) => handleChangeTravel(value, 'team')}
          />
          <NewTravelInput
            title="Budget"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) =>
              handleChangeTravel(value, 'budget')
            }
          />
          <NewTravelInput
            title="Description"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) =>
              handleChangeTravel(value, 'description')
            }
          />
          <NewTravelInput
            title="Statistic"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) =>
              handleChangeTravel(value, 'statistics')
            }
          />
          <NewTravelInput
            title="Graphics"
            style={{
              marginTop: 20,
            }}
            onChangeText={(value: string) =>
              handleChangeTravel(value, 'graphics')
            }
          />
          <NewTravelInput
            title="Comments"
            style={{
              marginTop: 20,
              marginBottom: 60,
            }}
            onChangeText={(value: string) =>
              handleChangeTravel(value, 'comments')
            }
          />
        </View>
      </KeyboardAwareScrollView>
      <FlyButton
        title="Save"
        onPress={handleAddTravel}
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
  },
  topBlock: {
    height: 150,
    width: 400,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  addImgButton: {
    backgroundColor: 'red',
    width: 210,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    position: 'absolute',
    top: -80,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
