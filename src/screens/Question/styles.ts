import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 20,
    marginTop: 30,
  },
  body: {
    height: 200,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  questionContainer: {
    height: '70%',
    justifyContent: 'center',
  },
  question: {
    textAlign: 'center',
  },
  buttonContainer: {
    borderTopWidth: 1,
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 70,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  buttonText: {
    color: 'blue',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
