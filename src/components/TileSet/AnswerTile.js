import React from 'react';
import { Button } from 'react-native';

const AnswerTile = (props) => (
  <Button
    className='answerTile'
    value={props.answer[0]}
    style={{ backgroundColor: props.color }}
    onClick={props.onClick}
  >
    {props.answer[0].toUpperCase()}: {props.answer[1]}
  </Button>
);

export default AnswerTile;
