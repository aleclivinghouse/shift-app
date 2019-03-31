import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = (props, value) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
}
