import {
  EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = { employees: []};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMPLOYEES_FETCH_SUCCESS:
    console.log('action.payload in reducer', action.payload);
      return {...state, employees: action.payload}
    case EMPLOYEE_DELETE:
      return {...state, employees: state.employees.filter(employee => employee.id !== action.payload)}
    default:
      return state;
  }
}
