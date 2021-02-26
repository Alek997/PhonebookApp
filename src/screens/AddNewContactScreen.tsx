import React from 'react'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { Controller, useForm } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions'
import { ContactDto } from '../types/domain'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'
import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
    marginLeft: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black'
  },
  wrapper: {
    flex: 1
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

    margin: 8,
    paddingBottom: 10
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 30,
    marginBottom: 20,
    height: 50,
    paddingLeft: 20,
    borderRadius: 4
  },
  formInput: {
    marginVertical: 40
  },
  button: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    width: 150,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
})

type FormData = Omit<ContactDto, 'id'>

// const getCountries = async () => {
//   try {
//     const value = await AsyncStorage.getItem('countries')
//     if (value !== null) {
//       return JSON.parse(value)
//     }
//   } catch (error) {
//     // Error retrieving data
//   }
// }
export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const AddNewContactScreen: React.FC<{}> = () => {
  const { control, handleSubmit, errors } = useForm<FormData>()
  const dispatch = useDispatch()

  const addToContacts = (contact: ContactDto) => dispatch(addContact(contact))

  const onSubmit = (data: FormData) => {
    addToContacts({ ...data, id: uuid(), color: getRandomColor() })
    Navigation.popTo(screens.ContactsScreen.name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.formInput}>
              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={data => onChange(data)}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
                name="name"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.name && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    placeholder="Phone"
                    onChangeText={data => onChange(data)}
                    value={value}
                  />
                )}
                name="phone"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.phone && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, value }) => (
                  <>
                    <Picker
                      selectedValue={value}
                      style={styles.picker}
                      onValueChange={data => onChange(data)}
                    >
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      <Picker.Item label="Other" value="other" />
                    </Picker>
                  </>
                )}
                name="sex"
                rules={{ required: true }}
                defaultValue="male"
              />
              {errors.sex && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={data => onChange(data)}
                    value={value}
                    placeholder="Country"
                  />
                )}
                name="country"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.country && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={data => onChange(data)}
                    value={value}
                    placeholder="Code"
                  />
                )}
                name="code"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.code && <Text>This is required.</Text>}
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddNewContactScreen
