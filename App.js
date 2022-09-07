import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [valueInput, setValueInput] = useState('')
  const [showBill, setShowBill] = useState(false)
  const [pctValue, setPctValue] = useState(10)

  const bill = Number(parseFloat(valueInput).toFixed(2))
  const percentual = Number(parseFloat(valueInput * (pctValue / 100)).toFixed(2));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Calculadora de Gorjeta</Text>
      <View style={styles.pct}>
        <Button onPress={() => setPctValue(5)} title='5%'/>
        <Button onPress={() => setPctValue(10)} title='10%'/>
        <Button onPress={() => setPctValue(15)} title='15%'/>
        <Button onPress={() => setPctValue(20)} title='20%'/>
      </View>
      <TextInput 
      keyboardType='numeric' 
      placeholder='Insira o valor da conta' 
      placeholderTextColor='#000' 
      onChangeText={t => setValueInput(t)} 
      value={valueInput} 
      style={styles.Input} />
      <Text style={{fontSize: 16, marginBottom: 20}}>Pagando: {pctValue}%</Text>
      <Button value={showBill} onPress={() => setShowBill(!showBill)} title={showBill ? 'Ocultar Conta' : 'Mostrar Conta'}/>

      {showBill && valueInput != '' && 
      <View style={styles.BoxBill}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Preço Total: R$ {parseFloat(Number(bill + percentual)).toFixed(2)}</Text>
        <Text style={{fontSize: 15, marginTop: 10}}>Preço da conta: R$ {bill}</Text>
        <Text style={{fontSize: 15, marginTop: 10}}>O valor da gorjeta foi de: R$ {percentual} ({pctValue}%)</Text>
      </View>
      }
      {showBill && valueInput == '' && 
        alert('Preencha o valor da conta!')
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  },
  title: {
    fontSize: 25,
    marginTop: 40,
    color: '#000',
    marginBottom: 10
  },
  Input: {
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    color: '#000',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  BoxBill: {
    width: 300,
    alignItems: 'center',
    height: 300,
    backgroundColor: '#EEE',
    borderRadius: 20,
    marginTop: 30,
  },
  pct: {
    width: 200,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between'
  }
});
