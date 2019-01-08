import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { white, purple } from '../../utils/colors';

import TabNavigation from './TabNavigation'
import DeckDetails from '../DeckDetails';

const stacks = createStackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})

export default createAppContainer(stacks)