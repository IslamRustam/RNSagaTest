import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 200,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    transform: [{ rotate: '180deg' }],
  },
});
