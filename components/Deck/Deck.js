import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { grey } from '../../utils/colors'

const mapStateToProps = (decks, { id }) => {
  const deck = decks[id]
  return {
    deck
  }
}

export default connect(mapStateToProps)(
  (Deck = ({ deck }) => (
    <View style={styles.deckContainer}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cards}>
        {deck.questions.length === 1
          ? `${deck.questions.length} card`
          : `${deck.questions.length} cards`}
      </Text>
    </View>
  ))
)

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: grey,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 32
  },
  cards: {
    fontSize: 18,
    color: grey
  }
})
