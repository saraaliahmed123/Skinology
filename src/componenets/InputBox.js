import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputBox = ({placeholder, value, setter}) => {
  return (
    <TextInput 
        style={styles.input} 
        placeholder= {placeholder} 
        value={value}
        onChangeText = {(text) => setter(text)}
        secureTextEntry={placeholder === "Password"}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#D9D9D9",
        padding: 20,
        marginHorizontal: 25,
        marginTop: 20,
        // borderRadius: 30,
        borderRadius: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,  
        elevation: 20,
      },
})

export default InputBox