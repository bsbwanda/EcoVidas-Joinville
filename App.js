
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [pontos, setPontos] = useState(0);
  const [reciclagem, setReciclagem] = useState('');

  return (
    <ScrollView style={{padding:20, marginTop:40}}>
      <Text style={{fontSize:28,fontWeight:'bold'}}>EcoVidas Joinville</Text>
      <Text>Promovendo hábitos sustentáveis.</Text>

      <Text style={{marginTop:20,fontSize:20}}>Registrar Reciclagem</Text>
      <TextInput
        placeholder="Material reciclado"
        value={reciclagem}
        onChangeText={setReciclagem}
        style={{borderWidth:1,padding:10,marginVertical:10}}
      />
      <Button title="Registrar" onPress={() => setPontos(pontos + 10)} />

      <Text style={{marginTop:20}}>Pontuação: {pontos}</Text>

      <Text style={{marginTop:20,fontSize:20}}>Desafio da Semana</Text>
      <Text>Reduza o consumo de água por 10%.</Text>

      <Text style={{marginTop:20,fontSize:20}}>Módulos</Text>
      <Text>• Reciclagem</Text>
      <Text>• Consumo de Água</Text>
      <Text>• Consumo de Energia</Text>
      <Text>• Ranking e Medalhas</Text>
      <Text>• Pontos de Coleta</Text>
    </ScrollView>
  );
}
