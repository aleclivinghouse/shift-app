import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Chart from './common';
import Button from './common';
import Input from './common';
import Card from './common';
import CardSection from './common';
import Header from './common';
import Spinner from './common';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import Router from './Router';
console.log('this is the router', Router);

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
  firebase.firestore();
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}


export default App;
