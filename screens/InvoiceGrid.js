import React from 'react';
import { View, Text, FlatList } from 'react-native';
import invoicesData from '../assets/invoices.json';
import InvoiceDetail from './InvoiceDetail';

const InvoiceGrid = () => {
  const renderItem = ({ item }) => <InvoiceDetail invoice={item} />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Detalle de Facturas
      </Text>
      <FlatList
        data={invoicesData.invoices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default InvoiceGrid;
