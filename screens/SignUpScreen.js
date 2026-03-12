import React, {useContext} from "react";
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
import {AppContext} from "../context/AppContext";

export default function SignUp({navigation}) {

  const {setIsLoggedIn} = useContext(AppContext);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Create Account"
        onPress={()=>setIsLoggedIn(true)}
      />

      <Button
        title="Back to Sign In"
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