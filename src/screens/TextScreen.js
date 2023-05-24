import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? <Text>Password Must Be 4 Characters</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
