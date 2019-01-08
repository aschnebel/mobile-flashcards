import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { black } from '../utils/colors';

export default TextButton = ({ children, onPress, style = {} }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.btn, style]}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
    borderWidth: 1,
    fontSize: 16
  }
})