import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

{
  /* Burada Component yaratılıyor. */
}
const ImageDetail = ({ imageSource, title, imageRating }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Rating {imageRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
