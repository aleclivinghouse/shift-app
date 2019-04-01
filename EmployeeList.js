import React, {Component} from 'react';
import {Text, View, ListView, TouchableWithoutFeedback} from 'react-native';
import {employeesFetch} from './actions';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ListItem from './ListItem';
import Card from './common/Card';
import CardSection from './common/CardSection';
 import Input from './common/Input';
 import Button from './common/Button';

class EmployeeList extends Component{
  componentWillMount(){
    this.props.employeesFetch();
  }

  render(){
    console.log('these are employees props', this.props.employees);
    return (
      <View style={{flex: 1}}>
        {
          this.props.employees.map((item, index) => {
          return (
            <ListItem employee={item}/>
          )})
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employee.employees
  }
}


export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
