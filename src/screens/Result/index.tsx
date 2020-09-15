import React, { FC } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useQuestions } from '_store/hooks/useQuestions';
import { Question } from '_store/types/questions/model';
import styles, { getAnswerColor } from './styles';

const ResultScreen: FC = () => {
  const store = useQuestions();
  const navigation = useNavigation();

  const reducer = (accumulator: number, question: Question) => {
    if (question.isAnsweredCorrectly) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>You scored</Text>
        <Text style={styles.headerText}>{store.questions.reduce(reducer, 0) + '/' + store.amount}</Text>
      </View>
      <ScrollView>
        {
          store.questions.map(question => {
            return (
              <View
                key={question.question}
                style={styles.questionContainer}>
                <Text
                  style={[styles.questionMark, getAnswerColor(question.isAnsweredCorrectly)]}>
                  {question.isAnsweredCorrectly ? '+' : '-'}
                </Text>
                <Text style={styles.questionText}>{question.question}</Text>
              </View>
            );
          })
        }
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.button}>
        <Text style={{ color: 'white' }}>PLAY AGAIN?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResultScreen;
