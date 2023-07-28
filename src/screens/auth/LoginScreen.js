import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox';
import {Formik} from 'formik';
import {loginInitialValue, validationSchema} from './utils';
import {useNavigation} from '@react-navigation/native';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {loginUser} from '../../store/reducer/LoginSlice';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state?.login);
  console.log(loginData.token, 'loginToken');
  if (loginData?.token) {
    navigation.navigate('Home');
  } else {
    null;
  }

  const postData = values => {
    const payload = {
      password: values?.password,
      username: values?.username,
    };
    dispatch(loginUser(payload));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Formik
        initialValues={loginInitialValue}
        onSubmit={values => {
          postData(values);
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => {
          return (
            <View>
              <InputBox
                placeholder={'Username, email address or mobile number'}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                touched={touched.username}
                errors={errors.username}
              />
              <InputBox
                placeholder={'Password'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: normalizeFont(28),
    fontWeight: '700',
    color: 'blue',
  },
  loginButton: {
    width: dynamicSize(330),
    marginHorizontal: dynamicSize(20),
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: dynamicSize(7),
    borderRadius: dynamicSize(5),
    marginTop: dynamicSize(20),
  },
  buttonText: {
    color: 'white',
    fontSize: normalizeFont(20),
  },
});
