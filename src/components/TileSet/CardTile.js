import React from 'react';
import { Button } from 'react-native';

const CardTile = ({ question }) => (
  <Button className='cardtile box' title={question} />
);

export default CardTile;
