import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../context/AppContext";

export default function ProfileScreen() {

  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>

      {/* Top Banner */}
      <View style={styles.banner}></View>

      {/* Profile Info */}
      <View style={styles.infoContainer}>

        <Text style={styles.name}>Nguyễn Văn Khải</Text>

        <Text style={styles.job}>Mobile developer</Text>

        <Text style={styles.desc}>
          I have above 5 years of experience in native mobile apps development,
          now i am learning React Native
        </Text>

        <TouchableOpacity
          style={styles.signOutBtn}
          onPress={() => setIsLoggedIn(false)}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F6FA",
alignItems:"center"
},

banner:{
width:"100%",
height:180,
backgroundColor:"#18A8D4"
},

infoContainer:{
alignItems:"center",
marginTop:40,
paddingHorizontal:30
},

name:{
fontSize:22,
fontWeight:"600",
marginBottom:5
},

job:{
color:"#18A8D4",
fontWeight:"500",
marginBottom:15
},

desc:{
textAlign:"center",
color:"#777",
marginBottom:25
},

signOutBtn:{
backgroundColor:"#F4A000",
paddingVertical:10,
paddingHorizontal:25,
borderRadius:6
},

signOutText:{
color:"#fff",
fontWeight:"600"
}

});