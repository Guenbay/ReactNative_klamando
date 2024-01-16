import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Button, Text, View, TextInput, Image, Pressable } from 'react-native';
import { SearchComponent } from '../../components/detail/search';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/landschaft.jpg')} resizeMode="cover" style={styles.backroundimage} >
       
        <SearchComponent />
        
        <View>    
          <Button title="Info " onPress={"link zu Infoseite"}></Button>
        </View>

        <View style={{marginLeft: 12, marginRight: 12}}>
          <Text style={styles.text}>Willkomen auf der Wetter-App Klamando</Text> 
          <Text style={styles.text}>created by Lina, Ziko, Günbay</Text>
        </View>

      </ImageBackground>
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
  textInput: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 6,
    borderWidth: 2,
    marginTop: 16,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 550,
  },
  backroundimage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
    
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    
  },

});

export default HomeScreen;