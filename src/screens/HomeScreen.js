import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello ABC</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("Listobj")}
        title="Go to List obj Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Imagelist Demo"
      />
      <Button
        onPress={() => navigation.navigate("CounterNoST")}
        title="Go to Counter No State Var Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Boxes Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square1")}
        title="Go to Square screen in the classroom"
      />
      <Button
        onPress={() => navigation.navigate("MyText")}
        title="Go to Text Input Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Demo"
      />
      <Button
        onPress={() => navigation.navigate("BoxFlex")}
        title="Go to Box Flex Demo"
      />
      <Button
        onPress={() => navigation.navigate("InputScr")}
        title="Go to Input Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
