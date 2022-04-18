import React, {useState, useEffect} from 'react';
import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/Ionicons';
// import Voice from '@react-native-voice/voice';

export const Home = props => {
    const [recording, setRecording] = useState(false)
    const [text, setText] = useState("Text Recognition")

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler
        Voice.onSpeechEnd = onSpeechEndHandler
        Voice.onSpeechResults = onSpeechResultsHandler

        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, [])

    const onSpeechStartHandler = (e) => {
        console.log("start handler ",e)
    }
    const onSpeechEndHandler = (e) => {
        console.log("end handler ",e)
    }
    const onSpeechResultsHandler = (e) => {
        console.log("result handler ",e)
        let t = e.value[0]
        setText(t)
    }
    const startRecording = () => {
        Voice.start('en-US')
    }
    const stopRecording = () => {
        Voice.stop()
    }

    const changeIcon = () => {
        if (!recording){
            startRecording()
        }
        else{
            stopRecording()
        }
        setRecording(!recording)
    }
    const deleteText = () => {
        setText("")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.icon} onPress={() => changeIcon()}>
                    <Text>
                        <Icon name="mic-circle" color={recording ? "#ad1515" : "#08ff4b"} size={60}/>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteText()}>
                    <Text>
                        <Icon name="trash-bin" color={"#ad1515"} size={60}/>
                    </Text>
                </TouchableOpacity>
            </View >
            <View style={styles.textFlex}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center"
    },
    textFlex: {
        flex: 3,
        alignSelf: "stretch",
    },
    buttons: {
        flex: 1,
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingVertical: 20,
        height: 10
    },
    container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
    },
  });

export default Home;