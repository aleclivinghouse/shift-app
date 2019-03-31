import React, {Component} from 'react';
import {View, Text } from 'react-native';
// import { employeeUpdate, employeeCreate } from '../actions';
import  Card from './common/Card';
import  CardSection from './common/CardSection';
import  Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{
  onButtonPress() {
  // const { name, phone, shift } = this.props;
  //
  // this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render(){
    return (
      <Card>
       <EmployeeForm {...this.props} />
       <CardSection>
         <Button onPress={this.onButtonPress.bind(this)}>
           Create
         </Button>
       </CardSection>
     </Card>
   );
  }
}

export default EmployeeCreate;

   // <EmployeeForm {...this.props} />
