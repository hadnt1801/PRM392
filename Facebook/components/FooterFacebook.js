import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FooterFacebook() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.footerText}>Sign Up for Facebook</Text>
      </TouchableOpacity>

      <View style={styles.bottomRow}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.helpContainer}>
        <FontAwesome name="question-circle" size={30} color="#fff" />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: 100,
  },
  footerText: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 10,
    padding: 10,
  },
  bottomRow: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%', 
    paddingHorizontal: 30,
    
  },
  helpContainer: {
    position: 'absolute',
   bottom: 15,
    right: 0,
  },
});
