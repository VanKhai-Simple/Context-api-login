import React from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";

export default function ForgotPassword({navigation}) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        placeholder="Enter your email"
        style={styles.input}
      />

      <Button
        title="Reset Password"
        onPress={()=>alert("Reset link sent")}
      />

      <Button
        title="Back"
        onPress={()=>navigation.goBack()}
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:24,
    marginBottom:20
  },

  input:{
    width:"80%",
    borderWidth:1,
    padding:10,
    marginBottom:10
  }

});