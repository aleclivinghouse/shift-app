import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser} from './actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
 import Input from './common/Input';
 import Button from './common/Button';
 import Spinner from './common/Spinner';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return (
      <Card>
       <CardSection>
         <Input
           label="Email"
           placeholder="email@gmail.com"
           onChangeText={this.onEmailChange.bind(this)}
           value={this.props.email}
         />
       </CardSection>

       <CardSection>
         <Input
           secureTextEntry
           label="Password"
           placeholder="password"
           onChangeText={this.onPasswordChange.bind(this)}
           value={this.props.password}
         />
       </CardSection>

       <Text style={styles.errorTextStyle}>
         {this.props.error}
       </Text>
       <Text style={styles.errorTextStyle}>
       {this.props.error}
       </Text>
       <CardSection>
         {this.renderButton()}
       </CardSection>
     </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser} )(LoginForm);
