import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { black } from '../utils/colors'

export default (TextButton = ({ children, onPress, style = {}, textStyle = {} }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{children}</Text>
  </TouchableOpacity>
))

const styles = StyleSheet.create({
  button: {
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16
  }
})
