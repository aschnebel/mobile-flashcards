import React from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'

import { purple } from './utils/colors';

import Decks from './components/Decks'

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
export default class App extends React.Component {
  render() {
    return (
      <View style={[{ flex: 1 }]}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <Decks />
      </View>
    )
  }
}