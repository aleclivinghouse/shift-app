import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Chart from './common';
import Button from './common';
import Input from './common';
import Card from './common';
import CardSection from './common';
import Header from './common';
import Spinner from './common';
import LoginForm from './LoginForm';

class App extends React.Component {
  componentWillMount(){
    var config = {
    apiKey: "AIzaSyDh5lKoAn_Doy-TbyYdqJAK5UrBDXJ4vuk",
    authDomain: "shift-manager-557da.firebaseapp.com",
    databaseURL: "https://shift-manager-557da.firebaseio.com",
    projectId: "shift-manager-557da",
    storageBucket: "shift-manager-557da.appspot.com",
    messagingSenderId: "958329089427"
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Text>Hello </Text>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}


export default App;