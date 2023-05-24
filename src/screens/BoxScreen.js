import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    //borderWidth: 1,
    borderWidth: 10,
    borderColor: "red",
    //marginVertical: 20,
    //marginHorizontal: 20,
    margin: 20,
  },
});
