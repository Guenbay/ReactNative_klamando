import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image} from 'react-native';
import { DetailComponent } from '../../components/detail/details';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 40}}>
          Verschiedene Anziehsachen
        </Text>

        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />
        <DetailComponent />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default DetailScreen;