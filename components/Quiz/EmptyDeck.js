import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default (EmptyDeck = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.message}>
        Sorry, you cannot take a quiz because there are no cards in the deck.
      </Text>
    </View>
  </View>
))
