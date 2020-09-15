import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
    height: 40,
    marginVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
