import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({text, onPress, sty}) => {
  return (
    <TouchableOpacity 
        style={[styles.button, {backgroundColor: sty}]}
        onPress={onPress}
    > 
        <Text style={sty !== "white" ? {color:"white"} : {color:"black"}} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
         borderRadius: 30,
        //borderRadius: 5,
        justifyContent: "center",
        height: "41%",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,  
        elevation: 20,
    }
})

export default Button