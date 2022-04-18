import * as React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Speech from 'expo-speech';

export const TTS = () => {
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
     
        <TextInput value={text} onChangeText={setText} style={styles.input} placeholder={"Type something here..."} placeholderTextColor="#fff"/>
      
      <View>

      <Text style={styles.text}>Pitch: {pitch}</Text>
      <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={2}
      minimumTrackTintColor="#08ff4b"
      maximumTrackTintColor="#fff"
      value={pitch}
      onValueChange={setPitch}
    />
      <Button title="Press to hear some words" onPress={speak} color="#fff"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20
  },
  input: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "stretch",
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#08ff4b",
    margin: 8
  },
  text: {
    color: "#fff",
  }
});
export default TTS