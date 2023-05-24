import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreenObj = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 34 },
    { name: "Friend #6", age: 62 },
    { name: "Friend #7", age: 55 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(element) => {
        console.log(element);
        return (
          <Text style={styles.textStyle}>
            {element.item.name} - Age {element.item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreenObj;
