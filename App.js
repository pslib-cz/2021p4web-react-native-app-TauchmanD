import * as React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = React.useState("")
  const [pitch, setPitch] = React.useState(1)
  const speak = () => {
    options={
        pitch: pitch
    }
    Speech.speak(text, options);
  };

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} style={styles.input}/>
      <Text>Pitch: {pitch}</Text>
      <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={2}
      minimumTrackTintColor="blue"
      maximumTrackTintColor="#000000"
      value={pitch}
      onValueChange={setPitch}
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
    alignSelf: "stretch",
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    margin: 8
  }
});