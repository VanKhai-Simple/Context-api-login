import React from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  return (

    <ScrollView style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>Explorer</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search for meals or area"
          style={styles.input}
        />
      </View>

      {/* Categories */}
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <Text style={styles.filter}>Filter</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.categoryCard}>
          <Image
            source={require("../assets/pizza.jpg")}
            style={styles.categoryImg}
          />
          <Text>Pizza</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require("../assets/burger.jpg")}
            style={styles.categoryImg}
          />
          <Text>Burgers</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require("../assets/steak.jpg")}
            style={styles.categoryImg}
          />
          <Text>Steak</Text>
        </View>

      </ScrollView>

      {/* Popular Items */}
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <View style={styles.card}>

        <Image
          source={require("../assets/food1.jpg")}
          style={styles.foodImg}
        />

        <View style={{marginLeft:10}}>
          <Text style={styles.foodTitle}>Food 1</Text>
          <Text style={styles.foodSub}>By Viet Nam</Text>
          <Text style={styles.price}>1$</Text>
        </View>

      </View>

      <View style={styles.card}>

        <Image
          source={require("../assets/food2.jpg")}
          style={styles.foodImg}
        />

        <View style={{marginLeft:10}}>
          <Text style={styles.foodTitle}>Food 2</Text>
          <Text style={styles.foodSub}>By Viet Nam</Text>
          <Text style={styles.price}>3$</Text>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F5F6FA",
padding:15
},

header:{
fontSize:24,
fontWeight:"600",
marginTop:40
},

searchBox:{
backgroundColor:"#fff",
padding:10,
borderRadius:10,
marginTop:15
},

input:{
fontSize:14
},

sectionRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:20
},

sectionTitle:{
fontSize:18,
fontWeight:"600"
},

filter:{
color:"#F4A000"
},

viewAll:{
color:"#F4A000"
},

categoryCard:{
marginRight:15,
alignItems:"center",
marginTop:10
},

categoryImg:{
width:100,
height:70,
borderRadius:10,
marginBottom:5
},

card:{
backgroundColor:"#fff",
borderRadius:12,
flexDirection:"row",
padding:10,
marginTop:10
},

foodImg:{
width:70,
height:70,
borderRadius:10
},

foodTitle:{
fontWeight:"600"
},

foodSub:{
color:"#777",
fontSize:12
},

price:{
marginTop:5
}

});