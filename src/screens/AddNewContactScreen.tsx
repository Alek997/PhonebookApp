import React from 'react'
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

const styles = StyleSheet.create({
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

const AddNewContactScreen: React.FC<{}> = () => {
  const { control, handleSubmit, errors } = useForm<FormData>()
  const dispatch = useDispatch()

  const addToContacts = (contact: ContactDto) => dispatch(addContact(contact))

  const onSubmit = (data: FormData) => {
    addToContacts({ ...data, id: uuid() })
    Navigation.dismissModal(screens.AddNewContactScreen.name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
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
                      onChangeText={value => onChange(value)}
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
                      onChangeText={value => onChange(value)}
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
                render={({ onChange, onBlur, value }) => (
                  <>
                    <Text style={styles.label}>Sex</Text>
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
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
                      onChangeText={value => onChange(value)}
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
                      onChangeText={value => onChange(value)}
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
