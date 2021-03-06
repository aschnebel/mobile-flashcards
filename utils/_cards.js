import { AsyncStorage } from 'react-native'

export const CARDS_STORAGE_KEY = 'MobileFlashcards:cards'

function getDummyCardsData() {
  const cards = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(cards))

  return cards
}

export async function getData(results) {
  return results === null 
    ? getDummyCardsData()
    : JSON.parse(results)
}
