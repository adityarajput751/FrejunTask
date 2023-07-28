import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {dynamicSize} from '../utils/responsive';

const InputBox = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  value,
  touched,
  keyboardType,
  errors,
}) => {
  return (
    <View style={{height: 80,  marginHorizontal: dynamicSize(20),}}>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          touched={touched}
          keyboardType={keyboardType}
        />
      </View>
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: dynamicSize(1),
   
    paddingHorizontal: dynamicSize(10),
    height: dynamicSize(45),
    borderRadius: dynamicSize(10),
    marginTop: dynamicSize(15),
    width: dynamicSize(330)
  },
  errorMsg: {
    color: 'red',
    paddingLeft: dynamicSize(5),
  },
});
