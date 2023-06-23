import React from 'react';
import { View } from 'react-native';
import ControlCapasCincho from './ControlCapas';
import InvoiceGrid from './InvoiceGrid';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ControlCapasCincho />
      <InvoiceGrid />
    </View>
  );
};

export default App;