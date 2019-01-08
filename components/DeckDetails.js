import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { grey, white, pink } from '../utils/colors'

import TextButton from './TextButton'

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: deckId
    }
  }
  render() {
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cards}>
            {deck.questions.length === 1
              ? `${deck.questions.length} card`
              : `${deck.questions.length} cards`}
          </Text>
        </View>
        <View style={styles.deckActions}>
          <TextButton>Add Card</TextButton>
          <TextButton
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: white }}
          >
            Start Quiz
          </TextButton>
          <TextButton
            style={{ borderWidth: 'none' }}
            textStyle={{ color: pink }}
          >
            Delete Deck
          </TextButton>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (decks, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  deckDetails: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  deckActions: {
    flex: 2
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32
  },
  cards: {
    fontSize: 18,
    color: grey
  }
})

export default connect(mapStateToProps)(DeckDetails)
