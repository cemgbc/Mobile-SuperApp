import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const colorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, 'rgb(0,0,0)']);
          //setColors([...colors, 'rgb(0,0,0)']);
          //setColors([...colors, 'rgb(0,0,255)']);
          // setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => {
          item;
        }}
        renderItem={({ item }) => {
          // 'rgb(0,0,0)' a string like this
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default colorScreen;
