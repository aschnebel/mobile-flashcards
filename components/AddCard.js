import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

import { grey } from '../utils/colors'
import { saveCardToDeck } from '../utils/api'
import { addCard } from '../actions'

class AddCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }

  state = {
    question: '',
    answer: ''
  }

  handleChange = name => text => {
    this.setState({
      [name]: text
    })
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { dispatch, navigation, deckId } = this.props

    saveCardToDeck(deckId, {
      question,
      answer
    })
      .then(dispatch(addCard(deckId, { question, answer })))
      .then(() => {
        this.setState(() => ({
          question: '',
          answer: ''
        }))
      })
      .then(navigation.goBack())
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="padding"
      >
        <View style={{ height: 80 }} />
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChange('question')}
            value={question}
            placeholder="Question"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChange('answer')}
            value={answer}
            placeholder="Answer"
          />
          <TextButton onPress={this.handleSubmit} style={styles.button}>
            Create Question
          </TextButton>
        </View>
        <View style={{ height: 150 }} />
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deckId
  }
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  textInput: {
    padding: 12,
    fontSize: 18,
    borderBottomColor: grey,
    borderWidth: 1,
    alignSelf: 'stretch',
    borderRadius: 8,
    marginBottom: 10
  },
  button: {
    alignSelf: 'center'
  }
})

export default connect(mapStateToProps)(AddCard)
