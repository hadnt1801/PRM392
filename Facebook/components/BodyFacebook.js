import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BodyFacebook() {
  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Email or Phone"
        placeholderTextColor="#ccc"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    marginBottom: 40,
  },
  textInput: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#8b9dc3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
