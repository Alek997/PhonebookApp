import React from 'react'
import 'react-native-get-random-values'
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
import { ContactDto, Country } from '../types/domain'
import { Icon } from 'react-native-eva-icons'

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1
//   },
//   label: {
//     color: 'black',
//     margin: 20,
//     marginLeft: 0
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     margin: 8,
//     paddingBottom: 10
//   },
//   picker: {
//     height: 50,
//     width: 150,
//     paddingLeft: 10,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: 'black',
//     color: 'black'
//   },

//   input: {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 50,
//     paddingLeft: 20,
//     borderRadius: 4
//   },
//   formInput: {
//     marginVertical: 40
//   },
//   button: {
//     fontSize: 20,
//     backgroundColor: 'blue',
//     color: 'white',
//     width: 150,
//     paddingVertical: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     alignSelf: 'center'
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16
//   },
//   fieldContainer: {
//     marginHorizontal: 30,
//     marginBottom: 20
//   },
//   error: {
//     color: 'red'
//   }
// })

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20
  },
  fieldContainer: {
    marginVertical: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 3,
    width: '90%',
    paddingLeft: 10
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    marginTop: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  picker: {
    height: 50,
    width: 200,
    paddingLeft: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
    color: 'black'
  },
  icon: {
    marginRight: 10
  },
  error: {
    color: 'red',
    paddingLeft: 45
  }
})

type FormData = Omit<ContactDto, 'id'>

interface Props {
  initialValue?: ContactDto
  onSubmit(data: FormData)
  countries: Country[]
}
const ContactForm: React.FC<Props> = ({
  initialValue = {},
  onSubmit,
  countries
}) => {
  const { control, handleSubmit, errors, watch } = useForm<FormData>({
    defaultValues: initialValue
  })
  const country = watch('country')

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.container}>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <View style={styles.fieldContainer}>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="person-outline"
                      width={25}
                      height={25}
                      fill="grey"
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Name"
                      style={styles.input}
                      onChangeText={data => onChange(data)}
                      value={value}
                      onBlur={onBlur}
                    />
                  </View>
                  {errors.name && (
                    <Text style={styles.error}>Name is required.</Text>
                  )}
                </View>
              )}
              name="name"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <View style={styles.fieldContainer}>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="phone-outline"
                      width={25}
                      height={25}
                      fill="grey"
                      style={styles.icon}
                    />
                    <TextInput
                      keyboardType={'phone-pad'}
                      style={styles.input}
                      onBlur={onBlur}
                      placeholder="Phone"
                      onChangeText={data => onChange(data)}
                      value={value}
                    />
                  </View>

                  {errors.phone && (
                    <Text style={styles.error}>Phone is required.</Text>
                  )}
                </View>
              )}
              name="phone"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, value }) => (
                <View style={styles.fieldContainer}>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="plus-square-outline"
                      width={25}
                      height={25}
                      fill="grey"
                      style={styles.icon}
                    />
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
                  </View>

                  {errors.sex && (
                    <Text style={styles.error}>Sex is required.</Text>
                  )}
                </View>
              )}
              name="sex"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, value }) => (
                <View style={styles.fieldContainer}>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="globe-2-outline"
                      width={25}
                      height={25}
                      fill="grey"
                      style={styles.icon}
                    />
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
                  </View>
                  {errors.country && (
                    <Text style={styles.error}>Country is required.</Text>
                  )}
                </View>
              )}
              name="country"
              rules={{ required: true }}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({ onChange, value }) => (
                <View style={styles.fieldContainer}>
                  <View style={styles.inputContainer}>
                    <Icon
                      name="code-outline"
                      width={25}
                      height={25}
                      fill="grey"
                      style={styles.icon}
                    />
                    <RNPickerSelect
                      disabled={!country}
                      style={{
                        inputIOS: styles.picker,
                        inputAndroid: styles.picker
                      }}
                      value={value}
                      placeholder={{ label: 'Select code', value: null }}
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
                  </View>
                  {errors.code && (
                    <Text style={styles.error}>Code is required.</Text>
                  )}
                </View>
              )}
              name="code"
              rules={{ required: true }}
              defaultValue=""
            />

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

export default ContactForm
