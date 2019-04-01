import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import {employeeUpdate} from './actions';
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component{
  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({props, value});
    })
  }

  onButtonPress(){
    const {name, phone, shift} = this.props;
    console.log(name, phone, shift);
  }

  render(){
    return (
      <Card>
      <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps in employeeEdit', state)
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeEdit);
