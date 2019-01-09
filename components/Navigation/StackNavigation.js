import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { white, purple } from '../../utils/colors'

import TabNavigation from './TabNavigation'
import DeckDetails from '../DeckDetails'
import AddCard from '../AddCard'
import Quiz from '../Quiz/Quiz';

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
  },
  Quiz: {
    screen: Quiz,
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
