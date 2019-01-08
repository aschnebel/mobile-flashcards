import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.card]
        }
      }
    case REMOVE_DECK:
      return Object.keys(state)
        .filter(key => key !== action.title)
        .reduce((result, current) => {
          result[current] = state[current]
          return result
        }, {})
    default:
      return state
  }
}
