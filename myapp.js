import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ActivityIndicator,useState,TextInput,Button } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import ImageScreen from "./src/screens/ImageScreen"
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <ImageScreen/>
      <View>
      <Image source={require('./src/screens/indir.jpg')} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
     <Button 
      title="LOGIN "
      disabled={false}
      color="Black"
      />
      </View>     
    </View>
  
  );
}

