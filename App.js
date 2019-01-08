import React from 'react'

import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

import { purple } from './utils/colors'

import StackNavigation from './components/Navigation/StackNavigation'

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
      <Provider store={createStore(reducer)}>
        <View style={[{ flex: 1 }]}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <StackNavigation />
        </View>
      </Provider>
    )
  }
}
