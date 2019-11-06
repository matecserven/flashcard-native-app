import React from 'react';
import { View } from 'react-native';

const Score = ({ type, score }) => (
  <View>
    {type}: {score}
  </View>
);

export default Score;
