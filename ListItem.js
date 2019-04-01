import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  CardSection  from './common/CardSection';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    console.log('these are the props in listItem');
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={{flex: 1}}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.employee.data.name}
            </Text>
            <Text style={styles.titleStyle}>
              {this.props.employee.data.phone}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
