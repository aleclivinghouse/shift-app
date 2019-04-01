import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import Card from './common/Card';
import Confirm from './common/Confirm';
import CardSection from './common/CardSection';
import Button from './common/Button';
import {employeeUpdate, employeeSave, employeeDelete} from './actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {showModal: false};

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

  onTextPress(){
    const {phone, shift} = this.props;
    Communications.text(phone, 'Your upcoming shift is on ' + shift);
  }

  onAccept(){
    const id = this.props.employee.id;
    this.props.employeeDelete(id);
  }

  onDecline(){
     this.setState({ showModal: false });
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
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
