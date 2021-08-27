import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let mytext = 'Hello my first app'
  return (
    <View style={styles.container}>
      <Image style={styles.pizzaImage}
              source={{uri: 'https://book.nyc3.digitaloceanspaces.com/pizza.jpg',}} />
      <Text style={styles.baseText}>Pizza vs Pizza App</Text>
      <Text style={styles.newText}>{mytext}</Text>
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
  baseText: {
    color: 'navy',
    fontSize: 30,
    fontStyle: 'italic',
  },
  newText: {
    color: 'red',
    fontSize: 20,
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
});
