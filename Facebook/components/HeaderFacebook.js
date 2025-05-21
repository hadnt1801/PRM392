import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


export default function HeaderFacebook() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/download.png')}
        style={styles.logo}
        resizeMode="center"
      />
      <Text style={styles.languageText}>
        English · <Text style={styles.changeText}>Change</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 90,
   
  },
  icon: {
    marginBottom: 20,
  },
  languageText: {
    color: '#fff',
    fontSize: 17,
  },
  changeText: {
   
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});
