import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, AntDesign  } from "@expo/vector-icons";

const Footer = ()=>{
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="lock-pattern"
          size={30}
          color="#a3cdf5"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="menu" size={30} color="#a3cdf5" />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="alarm" size={30} color="#a3cdf5" />
      </TouchableOpacity>

      <TouchableOpacity>
        <AntDesign name="setting" size={30} color="#a3cdf5" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  }
})

export default Footer