import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import Firebase, { FirebaseContext } from './src/components/Firebase';
import HomePage from './src/components/HomePage/HomePage';
import styles from './src/stylesheets/styles';

export default function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <View style={styles.container}>
          <HomePage />
        </View>
      </Provider>
    </FirebaseContext.Provider>
  );
}
