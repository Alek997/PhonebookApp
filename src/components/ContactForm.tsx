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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black'
  },

  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
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
  },
  fieldContainer: {
    marginHorizontal: 30,
    marginBottom: 20
  },
  error: {
    color: 'red'
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
                  <View style={styles.fieldContainer}>
                    <TextInput
                      placeholder="Name"
                      style={styles.input}
                      onChangeText={data => onChange(data)}
                      value={value}
                      onBlur={onBlur}
                    />
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
                    <TextInput
                      keyboardType={'phone-pad'}
                      style={styles.input}
                      onBlur={onBlur}
                      placeholder="Phone"
                      onChangeText={data => onChange(data)}
                      value={value}
                    />
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
                    {errors.code && (
                      <Text style={styles.error}>Code is required.</Text>
                    )}
                  </View>
                )}
                name="code"
                rules={{ required: true }}
                defaultValue=""
              />
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

export default ContactForm
