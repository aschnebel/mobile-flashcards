import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

import { Ionicons } from '@expo/vector-icons';

import { purple, white } from '../../utils/colors';

import Decks from '../Decks';
import NewDeck from '../NewDeck';

const Tabs =  createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'Add Deck',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        )
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default createAppContainer(Tabs)