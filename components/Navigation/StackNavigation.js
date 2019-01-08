import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { white, purple } from '../../utils/colors'

import TabNavigation from './TabNavigation'
import DeckDetails from '../DeckDetails'
import AddCard from '../AddCard'

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
    navigationOptions: getNavigationOptions()
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: getNavigationOptions()
  }
})

function getNavigationOptions() {
  return {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  }
}

export default createAppContainer(stacks)
