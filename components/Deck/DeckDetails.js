import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { grey, white, pink } from '../../utils/colors'

import { removeDeck } from '../../utils/api'
import { deleteDeck } from '../../actions'

import TextButton from '../TextButton'

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: deckId
    }
  }

  handleDeletion = () => {
    const { remove, goHome, deckId } = this.props
    remove()
    goHome()
    removeDeck(deckId)
  }

  render() {
    const { deck, deckId, navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.deckDetails}>
          <Text style={styles.title}>{deck && deck.title}</Text>
          <Text style={styles.cards}>
            {deck && deck.questions.length === 1
              ? `${deck && deck.questions.length} card`
              : `${deck && deck.questions.length} cards`}
          </Text>
        </View>
        <View style={styles.deckActions}>
          <TextButton
            onPress={() => navigation.navigate('AddCard', { deckId })}
          >
            Add Card
          </TextButton>
          <TextButton
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: white }}
            onPress={() => navigation.navigate('Quiz', { deckId })}
          >
            Start Quiz
          </TextButton>
          <TextButton
            style={{ borderWidth: 'none' }}
            textStyle={{ color: pink }}
            onPress={this.handleDeletion}
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
    deck: decks[deckId],
    deckId
  }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    remove: () => dispatch(deleteDeck(deckId)),
    goHome: () => navigation.navigate('Decks')
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetails)
