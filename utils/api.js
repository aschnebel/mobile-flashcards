import { AsyncStorage } from 'react-native'
import { CARDS_STORAGE_KEY, getData } from './_cards'

export function getDecks() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).then(getData)
}

export function getDeck(id) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(JSON.parse)
    .then(decks => decks[id])
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title
      }
    })
  )
}

export function saveCardToDeck(title, card) {
  return AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        questions: [card]
      }
    })
  )
}
