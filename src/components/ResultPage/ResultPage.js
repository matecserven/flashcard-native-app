import React from 'react';
import { View } from 'react-native';
import Score from './Score';

const ResultPage = ({ correct, incorrect }) => (
  <View>
    <Score type={'Correct'} score={correct} />
    <Score type={'Incorrect'} score={incorrect} />
  </View>
);

export default ResultPage;
