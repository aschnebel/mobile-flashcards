import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default (RemainingQuestions = ({askedQuestions, totalQuestions}) => {
  return (
    <View>
      <Text style={[styles.message, {marginBottom: 50}]}>{askedQuestions}/{totalQuestions}</Text>
    </View>
  )
})
