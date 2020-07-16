/* eslint-disable no-console */
import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  console.tron.log('teste');

  return <Routes />;
}
