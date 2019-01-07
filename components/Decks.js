import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, StyleSheet, FlatList } from 'react-native'

import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { AppLoading } from 'expo'
import Deck from './Deck'

class Decks extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => {
        this.setState(() => ({
          ready: true
        }))
      })
  }

  render() {
    const { ready } = this.state
    const { decks } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => (
            <View key={item}>
              <Deck id={item} />
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
    )
  }
}

const mapStateToProps = decks => {
  return {
    decks
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(mapStateToProps)(Decks)
