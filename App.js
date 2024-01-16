import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Button, Text, View, TextInput, Image, Pressable } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import InfoScreen from './screens/InfoScreen';


export default function App_startseite() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      
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
})