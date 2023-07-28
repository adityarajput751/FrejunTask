import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import rootReducer from './src/store/store';
import thunk from 'redux-thunk';
// import store from './src/store/store'; // Import the store without destructuring

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StackNavigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
