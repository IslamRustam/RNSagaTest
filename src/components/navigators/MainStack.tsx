import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '_screens/Home';
import QuestionScreen from '_screens/Question';
import ResultScreen from '_screens/Result';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Question" component={QuestionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;