import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter1 = ({ color,onIncrease,onDecrease }) => {
  return (
    <View>
     
     <Button onPress={onIncrease} title={`Increase ${color}`} />

      <Button onPress={onDecrease} title={`Decrease ${color}`} />
    </View>
  );
};


const styles = StyleSheet.create({});

export default ColorCounter1;
