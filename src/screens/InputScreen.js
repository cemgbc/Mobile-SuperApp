import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const InputScreen = () => {
    const {myinput,setMyinput}=UseState("");
  return (
    <View>
      <Text>InputScreen</Text>
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      value="Istanbul"
      onChangeText={(newvalue)=> setMyinput(newvalue)}
      style={styles.input}

      />
    </View>
  )
}

export default InputScreen

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:"black",
        borderWidth:1,
    }
})