import React from 'react';
import { View, Text } from 'react-native';

const InvoiceDetail = ({ invoice }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Factura #{invoice.id}
      </Text>
      <Text>Cliente: {invoice.customerName}</Text>
      <Text>Capas:</Text>
      {invoice.layers.map((layer, index) => (
        <Text key={index}>
          {layer.layerType}: {layer.material}
        </Text>
      ))}
    </View>
  );
};

export default InvoiceDetail;
