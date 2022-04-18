import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

import Home from "./screens/Home"
import TTS from "./screens/TTS"

export const SCREEN_HOME = "Home"
export const SCREEN_TTS = "TTS"


const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case SCREEN_HOME : iconName = "mic"; break;
                case SCREEN_TTS : iconName = "volume-high"; break;
                default: iconName = "information-circle";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#08ff4b",
            tabBarInactiveTintColor: 'white',
          })}
        >
          <Tab.Screen name={SCREEN_HOME} component={Home} options={{ title: 'Speech Recognition' }} />
          <Tab.Screen name={SCREEN_TTS} component={TTS} options={{ title: 'Text To Speech' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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