import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SignInScreen({ navigation }) {

  const { setIsLoggedIn } = useContext(AppContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    if(email && password){
      setIsLoggedIn(true);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      {/* Email */}
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity
        style={styles.signBtn}
        onPress={handleLogin}
      >
        <Text style={styles.signText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      {/* Social login */}
      <View style={styles.socialRow}>

        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbBtn}>
          <Text style={styles.fbText}>Facebook</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.signupRow}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
padding:25,
backgroundColor:"#fff",
justifyContent:"center"
},

title:{
fontSize:26,
fontWeight:"600",
textAlign:"center",
marginBottom:30
},

label:{
marginTop:10,
color:"#555"
},

input:{
borderWidth:1,
borderColor:"#ddd",
borderRadius:8,
padding:12,
marginTop:5
},

forgot:{
alignSelf:"flex-end",
marginTop:8,
color:"#F4A000"
},

signBtn:{
backgroundColor:"#F4A000",
padding:15,
borderRadius:8,
marginTop:20,
alignItems:"center"
},

signText:{
color:"#fff",
fontWeight:"600"
},

or:{
textAlign:"center",
marginVertical:20,
color:"#777"
},

socialRow:{
flexDirection:"row",
justifyContent:"space-between"
},

googleBtn:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:8,
width:"48%",
alignItems:"center"
},

fbBtn:{
backgroundColor:"#3b5998",
padding:12,
borderRadius:8,
width:"48%",
alignItems:"center"
},

googleText:{
fontWeight:"500"
},

fbText:{
color:"#fff",
fontWeight:"500"
},

signupRow:{
flexDirection:"row",
justifyContent:"center",
marginTop:20
},

signup:{
color:"#F4A000",
fontWeight:"600"
}

});