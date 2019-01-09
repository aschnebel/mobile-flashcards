import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import R from 'ramda'

import EmptyDeck from './EmptyDeck'
import QuizResult from './QuizResult'
import Question from './Question'
import Answer from './Answer'
import RemainingQuestions from './RemainingQuestions'
import {
  setLocalNotification,
  clearLocalNotification
} from '../../utils/helpers'

class Quiz extends Component {
  state = {
    correct: 0,
    showAnswer: false,
    currentQuestion: '',
    answeredQuestions: [],
    endOfQuiz: false
  }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
    this.getNextQuestion()
  }

  getNextQuestion = () => {
    const { answeredQuestions } = this.state
    const { deck } = this.props

    if (answeredQuestions.length === deck.questions.length) {
      this.setState(() => ({
        endOfQuiz: true
      }))
    } else {
      const remainingQuestions = R.filter(
        q => !R.contains(q.question, answeredQuestions),
        deck.questions
      )
      const newQuestion =
        remainingQuestions[
          Math.floor(Math.random() * remainingQuestions.length)
        ]
      this.setState(prevState => {
        return {
          currentQuestion: newQuestion,
          answeredQuestions: [
            ...prevState.answeredQuestions,
            newQuestion.question
          ]
        }
      })
    }
  }

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }))
  }

  handleAnswer = isCorrect => {
    this.setState(state => {
      return {
        correct: isCorrect ? state.correct + 1 : state.correct,
        showAnswer: !state.showAnswer
      }
    })
    this.getNextQuestion()
  }

  resetQuiz = () => {
    this.setState(
      () => ({
        correct: 0,
        showAnswer: false,
        currentQuestion: '',
        answeredQuestions: [],
        endOfQuiz: false
      }),
      () => this.getNextQuestion()
    )
  }

  render() {
    const { deck, deckId, navigation } = this.props
    const {
      answeredQuestions,
      correct,
      currentQuestion,
      endOfQuiz,
      showAnswer
    } = this.state

    const askedQuestions = answeredQuestions.length
    const totalQuestions = deck.questions.length

    if (deck.questions.length === 0) {
      return <EmptyDeck />
    }

    if (endOfQuiz === true) {
      return (
        <QuizResult
          correctAnswers={correct}
          totalAnswers={answeredQuestions.length}
          handleBackToDeck={() =>
            navigation.navigate('DeckDetails', { deckId })
          }
          handleRestartQuiz={this.resetQuiz}
        />
      )
    }

    if (showAnswer === false) {
      return (
        <View style={{ flex: 1 }}>
          <Question
            question={currentQuestion.question}
            handleToggle={this.toggleAnswer}
          />
          <RemainingQuestions
            askedQuestions={askedQuestions}
            totalQuestions={totalQuestions}
          />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <Answer
          answer={currentQuestion.answer}
          handleAnswer={this.handleAnswer}
        />
        <RemainingQuestions
          askedQuestions={askedQuestions}
          totalQuestions={totalQuestions}
        />
      </View>
    )
  }
}

const mapStateToProps = (decks, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId],
    deckId
  }
}

export default connect(mapStateToProps)(Quiz)
