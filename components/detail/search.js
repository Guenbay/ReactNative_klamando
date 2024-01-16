import React from "react"
import {View, TextInput, StyleSheet} from 'react-native'

export const SearchComponent = () => {
    return (
        <View>
            <TextInput 
                style={styles.textInput} 
                placeholder="Ort Eingeben" />
        </View>
    )

}

const styles = StyleSheet.create({

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
  
  });