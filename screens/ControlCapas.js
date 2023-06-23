
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ControlCapasCincho = () => {
  const [inferior, setInferior] = useState('');
  const [centro, setCentro] = useState('');
  const [superior, setSuperior] = useState('');
  const [cliente, setCliente] = useState('');

  const generarOrden = () => {
    const orden = {
      inferior,
      centro,
      superior,
      cliente
    };

    console.log('Orden generada:', orden);
  };

  return (
    <View>
      <TextInput
        placeholder="Capa inferior (cuero)"
        value={inferior}
        onChangeText={text => setInferior(text)}
      />
      <TextInput
        placeholder="Capa centro (esponja)"
        value={centro}
        onChangeText={text => setCentro(text)}
      />
      <TextInput
        placeholder="Capa superior (cuero)"
        value={superior}
        onChangeText={text => setSuperior(text)}
      />
      <TextInput
        placeholder="Información del cliente"
        value={cliente}
        onChangeText={text => setCliente(text)}
      />
      <Button title="Generar orden" onPress={generarOrden} />
    </View>
  );
};

export default ControlCapasCincho;
