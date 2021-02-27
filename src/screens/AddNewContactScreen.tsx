import React, { useEffect } from 'react'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { Controller, useForm } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select'
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
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addContact, getCountries } from '../redux/actions'
import { ContactDto, Country } from '../types/domain'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'

const styles = StyleSheet.create({
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
  picker: {
    height: 50,
    width: 150,
    paddingLeft: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black'
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

export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const AddNewContactScreen: React.FC<{}> = () => {
  const { control, handleSubmit, errors, watch } = useForm<FormData>()
  const country = watch('country')
  const dispatch = useDispatch()
  const { countries }: { countries: Country[] } = useSelector(
    (state: RootStateOrAny) => state.countriesReducer
  )

  const addToContacts = (contact: ContactDto) => dispatch(addContact(contact))

  const onSubmit = (data: FormData) => {
    addToContacts({ ...data, id: uuid(), color: getRandomColor() })
    Navigation.popTo(screens.ContactsScreen.name)
  }

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

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
                    <TextInput
                      placeholder="Name"
                      style={styles.input}
                      onChangeText={data => onChange(data)}
                      value={value}
                      onBlur={onBlur}
                    />
                    {errors.name && <Text>This is required.</Text>}
                  </>
                )}
                name="name"
                rules={{ required: true }}
                defaultValue=""
              />

              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                  <TextInput
                    keyboardType={'phone-pad'}
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
                  <RNPickerSelect
                    style={{
                      inputIOS: styles.picker,
                      inputAndroid: styles.picker
                    }}
                    value={value}
                    placeholder={{ label: 'Select sex', value: null }}
                    onValueChange={data => onChange(data)}
                    items={[
                      { label: 'Male', value: 'male' },
                      { label: 'Female', value: 'female' },
                      { label: 'Other', value: 'other' }
                    ]}
                  />
                )}
                name="sex"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.sex && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, value }) => (
                  <RNPickerSelect
                    style={{
                      inputIOS: styles.picker,
                      inputAndroid: styles.picker
                    }}
                    value={value}
                    placeholder={{ label: 'Select country', value: null }}
                    onValueChange={data => onChange(data)}
                    items={countries}
                  />
                )}
                name="country"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.country && <Text>This is required.</Text>}

              <Controller
                control={control}
                render={({ onChange, value }) => (
                  <RNPickerSelect
                    disabled={!country}
                    style={{
                      inputIOS: styles.picker,
                      inputAndroid: styles.picker
                    }}
                    value={value}
                    onValueChange={data => onChange(data)}
                    items={
                      country
                        ? countries
                            ?.find(item => country === item.value)
                            .callingCodes.map(code => ({
                              label: `+${code}`,
                              value: `+${code}`
                            }))
                        : []
                    }
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
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddNewContactScreen
