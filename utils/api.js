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
        title,
        questions: []
      }
    })
  )
}

export function saveCardToDeck(title, card) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    AsyncStorage.mergeItem(
      CARDS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          ...data[title],
          questions: [...data[title].questions, card]
        }
      })
    )
  })
}

export function removeDeck(title) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[title] = undefined
    delete data[title]
    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
  })
}
