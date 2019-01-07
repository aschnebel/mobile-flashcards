import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { getDecks } from '../utils/api';

class Decks extends Component {
  state = {
    decks: []
  }

  componentDidMount() {
    getDecks()
      .then(decks => {
        this.setState(() => ({
          decks
        }))
      })
  }

  render() {
    const {decks} = this.state
    return (
      <View>
        <Text>{JSON.stringify(decks)}</Text>
      </View>
    )
  }
}

export default Decks
