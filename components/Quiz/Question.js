import React from 'react'
import { View, Text } from 'react-native'

import { pink } from '../../utils/colors'
import styles from './styles'

export default (Question = ({ question, handleToggle }) => (
  <View style={styles.container}>
    <View style={[styles.textContainer, { justifyContent: 'flex-end' }]}>
      <Text style={styles.message}>{question}</Text>
    </View>
    <View style={styles.actionsContainer}>
      <TextButton
        style={[styles.button, { borderWidth: 0 }]}
        textStyle={{ color: pink }}
        onPress={() => handleToggle()}
      >
        Show Answer
      </TextButton>
    </View>
  </View>
))
