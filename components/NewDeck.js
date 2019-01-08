import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { grey } from '../utils/colors'
import TextButton from './TextButton';

class NewDeck extends Component {
  state = {
    value: ''
  }

  handleSubmit = () => {
    //Save in AsyncStorage
    //Dispatch action
    //Navigate to the Individual Deck View
  }

  handleChange = text => {
    this.setState(() => ({
      value: text
    }))
  }

  render() {
    const { value } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="padding"
      >
        <View style={styles.container}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChange}
            value={value}
            placeholder="Deck title"
          />
          <TextButton onPress={this.handleSubmit}>
            Submit
          </TextButton>
        </View>
        <View  style={{height: 150}}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30
  },
  textInput: {
    padding: 12,
    fontSize: 18,
    borderBottomColor: grey,
    borderWidth: 1,
    alignSelf: 'stretch',
    borderRadius: 8
  }
})

export default connect()(NewDeck)
