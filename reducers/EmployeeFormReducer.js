export const EMPLOYEE_UPDATE = 'employee_update';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
};
