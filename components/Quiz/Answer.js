import React from 'react'
import { View, Text } from 'react-native'

import { white } from '../../utils/colors'
import styles from './styles'

export default (Answer = ({ answer, handleAnswer }) => (
  <View style={styles.container}>
    <View style={[styles.textContainer, { justifyContent: 'flex-end' }]}>
      <Text style={styles.message}>{answer}</Text>
    </View>
    <View style={styles.actionsContainer}>
      <TextButton
        onPress={() => handleAnswer(true)}
        style={[styles.button, styles.correctButton]}
        textStyle={{ color: white }}
      >
        Correct
      </TextButton>
      <TextButton
        onPress={() => handleAnswer(false)}
        style={[styles.button, styles.incorrectButton]}
        textStyle={{ color: white }}
      >
        Incorrect
      </TextButton>
    </View>
  </View>
))
