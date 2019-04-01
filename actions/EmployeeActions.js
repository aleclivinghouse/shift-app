import * as firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  return (dispatch) => {
    const uid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const userRef = firestore.collection('users').doc(uid);
    userRef.collection('employees').doc().set({name, phone, shift})
    .then(() => Actions.employeeList())
  }
}

// export const employeeSave = ({name, phone, shift, uid}) => {
//   const userId = firebase.auth().currentUser.uid;
//   const firestore = firebase.firestore();
//   const userRef = firestore.collection('users').doc(userId);
//   let theQuery = userRef.collection('employees').where("uid","==" {})
//   console.log(theQuery);
// }



export const employeesFetch = () => {
  return (dispatch) => {
    const uid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const userRef = firestore.collection('users').doc(uid)
    userRef.collection('employees').onSnapshot((querySnapshot) => {
      let employees = [];
      querySnapshot.forEach(function(doc) {
            let map = {};
            map.id = doc.id;
            map.data=doc.data();
            employees.push(map);
            console.log('here are the added employees');
            console.log(employees);
        });
        console.log('here ate the employees', employees);
        dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: employees});
    });
   }
}
