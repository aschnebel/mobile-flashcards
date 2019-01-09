import { StyleSheet } from 'react-native'
import { green, red } from '../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  actionsContainer: {
    flex: 2,
  },
  message: {
    fontSize: 32,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctButton: {
    backgroundColor: green,
    borderColor: green
  },
  incorrectButton: {
    backgroundColor: red,
    borderColor: red
  }
})
