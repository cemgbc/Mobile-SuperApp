import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreenFlex = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

export default BoxScreenFlex;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "stretch",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject,
    fontSize: 18,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
