import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import HeaderFacebook from './components/HeaderFacebook';
import BodyFacebook from './components/BodyFacebook';
import FooterFacebook from './components/FooterFacebook';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3b5998" barStyle="light-content" />
      <HeaderFacebook />
      <BodyFacebook />
      <FooterFacebook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
});
