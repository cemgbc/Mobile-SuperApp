import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterNoState = () => {
  let counter = 0;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {  
            counter++; 
           // console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => { 
            counter--; 
            // console.log(counter);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterNoState;
