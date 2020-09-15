import React, { FC, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useQuestions } from '_store/hooks/useQuestions';
import styles from './styles';

const Picker: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const store = useQuestions();

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={togglePicker}
        style={styles.container}>
        <Text>{store.difficulty ? store.difficulty : 'difficulty'}</Text>
        <Image style={styles.image} source={require('_assets/triangle-outline-24.png')} />
      </TouchableOpacity>
      {isOpen &&
      (
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              store.setDifficulty('easy');
              togglePicker();
            }}
            style={{ justifyContent: 'center', height: 40, width: 150, borderColor: 'red', borderWidth: 1 }}>
            <Text>easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              store.setDifficulty('hard');
              togglePicker();
            }}
            style={{ justifyContent: 'center', height: 40, width: 150, borderColor: 'red', borderWidth: 1 }}>
            <Text>hard</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Picker;
