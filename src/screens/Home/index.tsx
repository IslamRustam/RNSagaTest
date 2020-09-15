import React, { FC } from 'react';
import { View, TextInput, Text, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Picker from '_components/Picker';
import { useQuestions } from '_store/hooks/useQuestions';
import styles from './styles';

const HomeScreen: FC = () => {
  const store = useQuestions();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.header}>Welcome to the Trivia Challenge!</Text>
      <View style={styles.body}>
        <Picker/>
        <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <TextInput
            keyboardType={'number-pad'}
            style={styles.textInput}
            onChangeText={text => {
              if (Number(text) || text === '') {
                store.setAmount(Number(text));
              }
            }}
            placeholderTextColor={'black'}
            placeholder={'amount'}
            value={store.amount === 0 ? undefined : String(store.amount)}
          />
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (store.difficulty && store.amount) {
            store.loadQuestions();
            navigation.navigate('Question');
          }
        }}
        style={styles.button}>
        <Text style={{ color: 'white' }}>BEGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
