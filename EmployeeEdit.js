import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import {employeeUpdate, employeeSave} from './actions';
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
  state = { newName: '', newPhone: '', newShift: '' };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }


  onButtonPress() {
    // const { name, phone, shift } = this.props;
    console.log('these are the props in EmployeeEdit');
    console.log(this.props);
    const name = this.props.name;
    console.log('this is the name', name);
    const phone = this.props.phone;
    const shift = this.props.shift;
    const id = this.props.employee.id;
    console.log('this si the id');
    console.log(id);

    this.props.employeeSave(name, phone, shift, id);
  }

  render() {
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
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);
