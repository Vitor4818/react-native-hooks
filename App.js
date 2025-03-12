import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  useEffect(()=>{
console.log('Rodou dentro o useEffect')
  },[])


useEffect(()=>{
console.log('Rodou porque o COUNT atualizou', count)
},[count])

  console.log('Rodou fora do useEffect')

  const [count, setCount] = useState(0)
  const handleIncrementar = ()=>{
    setCount(count+1)
  }
  const handleDecrementar = ()=>{
    if (count === 0) return;
    setCount(count-1)

  }
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>Contador: {count}</Text>
      <Button title='Incrementar' onPress={handleIncrementar}/>
      <Button title='Decrementar' onPress={handleDecrementar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
