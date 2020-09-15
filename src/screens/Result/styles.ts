import { StyleSheet } from 'react-native';

export const getAnswerColor = (isCorrect: boolean) => {
  return isCorrect ? { color: 'red' } : { color: 'blue' };
};

export default StyleSheet.create({
  header: {
    alignSelf: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
  },
  questionContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    marginVertical: 10,
  },
  questionMark: {
    marginBottom: 10,
  },
  questionText: {
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    width: 120,
    height: 40,
    marginVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
