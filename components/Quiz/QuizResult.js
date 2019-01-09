import React from 'react'
import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { green, black, white, pink } from '../../utils/colors'

import styles from './styles'

export default (QuizResult = ({
  correctAnswers,
  totalAnswers,
  handleRestartQuiz,
  handleBackToDeck
}) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.message}>Your score</Text>
      <Text style={styles.message}>
        <Feather name="check" size={30} color={green} />
        {(correctAnswers / totalAnswers * 100).toFixed(2)}%
      </Text>
    </View>
    <View style={styles.actionsContainer}>
      <TextButton
        style={{ backgroundColor: black }}
        textStyle={{ color: white }}
        onPress={() => handleRestartQuiz()}
      >
        Restart Quiz
      </TextButton>
      <TextButton
        style={{ borderWidth: 'none' }}
        textStyle={{ color: pink }}
        onPress={handleBackToDeck}
      >
        Back to Deck
      </TextButton>
    </View>
  </View>
))
