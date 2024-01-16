import React from 'react';
import {StyleSheet, Text, StatusBar, Image, View, Pressable, Touchable, Button, TouchableOpacity} from 'react-native';

const InfoScreen = () => {
  return (
     <View style={styles.container}>
      <Text>
        Infoseite
      </Text>
      
      <View style={{flexDirection: "row", columnGap: 200, marginBottom: 10}}>
        <Text>Grad-Anzeige</Text>
        <Text>Was ist für ein Wetter</Text>
      </View>

      <View>
        <Image source={require('../../assets/landschaft.jpg')} style={{width: 400, height: 400}}></Image>
        <Text style={styles.text}>Was zum Anziehen</Text>
        <TouchableOpacity style={styles.text}> Hier findest du passende Outfits</TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 25,
  }
});

export default InfoScreen;