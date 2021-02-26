import React, { useEffect } from 'react'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { Controller, useForm } from 'react-hook-form'
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions'
import { ContactDto } from '../types/domain'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150
  },
  wrapper: {
    flex: 1
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0
  },
  button: {
    color: 'white',
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 4
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

    margin: 8,
    paddingBottom: 10
  },
  input: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4
  },
  formInput: {
    marginVertical: 40
  }
})

type FormData = Omit<ContactDto, 'id'>

const getCountries = async () => {
  try {
    const value = await AsyncStorage.getItem('countries')
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (error) {
    // Error retrieving data
  }
}

const AddNewContactScreen: React.FC<{}> = () => {
  const { control, handleSubmit, errors } = useForm<FormData>()
  const dispatch = useDispatch()

  useEffect(() => {
    getCountries().then(data => console.log('data', data))
  }, [])

  const addToContacts = (contact: ContactDto) => dispatch(addContact(contact))

  const onSubmit = (data: FormData) => {
    addToContacts({ ...data, id: uuid() })
    Navigation.dismissModal(screens.AddNewContactScreen.name)
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
                  <>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={data => onChange(data)}
                      value={value}
                      onBlur={onBlur}
                    />
                  </>
                )}
                name="name"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.name && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={data => onChange(data)}
                      value={value}
                    />
                  </>
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
                    <Text style={styles.label}>Sex</Text>

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
                defaultValue=""
              />
              {errors.sex && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <>
                    <Text style={styles.label}>Country</Text>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={data => onChange(data)}
                      value={value}
                    />
                  </>
                )}
                name="country"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.country && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <>
                    <Text style={styles.label}>Code</Text>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={data => onChange(data)}
                      value={value}
                    />
                  </>
                )}
                name="code"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.code && <Text>This is required.</Text>}
            </View>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddNewContactScreen
