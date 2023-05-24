import { StyleSheet, Text, View } from 'react-native'
//import React from 'react'
import ColorCounter1 from '../components/ColorCounter1';
import React, { useState } from "react";
const COLOR_INCREMENT=15;

const SquareScreen1 = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
        <ColorCounter1 
        onIncrease={() =>setRed(red+15)}
        onDecrease={() =>setRed(red-15)}
        color="Red"
        />
        <ColorCounter1 color="Blue"
         onIncrease={() =>setBlue(blue+15)}
         onDecrease={() =>setBlue(blue-15)}
        />
        <ColorCounter1 color="Green"
        onIncrease={() =>setGreen(green+15)}
        onDecrease={() =>setGreen(green-15)}
        />
      <View
      style={{
        height:150,
        width:150,
      // backgroundColor:"rgb(0,0,0)"
      backgroundColor: `rgb(${red},${green},${blue})`,
      }}
      
      />
    </View>
  )
}
const styles = StyleSheet.create({})
export default SquareScreen1

