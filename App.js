import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [texte, setTexte] = React.useState("");

  const speak = () => {
    console.log(texte);
    Speech.speak(texte);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter your text'
        onChangeText={value => setTexte(value)}
        value={texte}
      />
      <Button title="Press to hear some words" onPress={speak} />
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

  input: {
    height: 80,
    width: 300,
    margin: 12,
    borderWidth: 1,
    
  },
});
