import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class HelloWorldApp extends React.Component {
  constructor() {
    super()
    this.updateState = this.updateState.bind(this)
  }
  state = {
    myState:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`
  }
  updateState() {
    this.setState({myState: 'Hello world!'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress = {this.updateState}>{this.state.myState}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
});

export default HelloWorldApp
