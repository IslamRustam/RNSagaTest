import React, { FC, useState } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useQuestions } from '_store/hooks/useQuestions';
import styles from './styles';

const QuestionScreen: FC = () => {
  const store = useQuestions();
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const answerQuestionHandler = (answer: string) => {
    if (currentQuestionIndex + 1 === store.questions.length) {
      navigation.navigate('Result');
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    store.answerQuestion({
      question: store.questions[currentQuestionIndex].question,
      answer,
    });
  };

  if (store.fetching) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator color={'blue'}/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        {store.questions[currentQuestionIndex].category}
      </Text>
      <View style={styles.body}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {store.questions[currentQuestionIndex].question}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => answerQuestionHandler('True')}>
            <Text style={styles.buttonText}>TRUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => answerQuestionHandler('False')}>
            <Text style={styles.buttonText}>FALSE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>{(currentQuestionIndex + 1) + ' of ' + store.questions.length}</Text>
    </SafeAreaView>
  );
};

export default QuestionScreen;
