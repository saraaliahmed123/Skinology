import {React, useState} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useRecordContext } from '../context/RecordContext';

const Button = ({text, onPress, sty, line, home, createRecord}) => {
  const {images} = useRecordContext()

  const [pressed, setPressed] = useState(false);
  // //console.log(pressed)
  return (
    <TouchableOpacity 
        style={[styles.button, {backgroundColor: sty}, line ? !pressed ? {borderWidth: 3, borderColor: line} : {backgroundColor: line} : {borderWidth: 0}]}
        onPress={() => {
          if (createRecord)
          {
            if (home && images)
            {
              if (images.length > 0)
              {
                setPressed(!pressed);
                onPress ? onPress() : console.log("here")
              }
            }
            if (home && !images)
            {
              alert("Take a picture to save with your record")
            }
          }
          else
          {
            onPress ? onPress() : console.log("here")
          }
          
          //onPress();
        }}
    > 
        <Text style={(sty !== "white" && sty !=="#ECECEE") ? {color:"white"} : home ? pressed ? {color: "white"} : {color: home} : {color:"black"}} >
          {!pressed ? text : home ? "COMPLETED ROUTINE" : text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        //borderRadius: 30,
        borderRadius: 5,
        justifyContent: "center",
        // height: "41%",
        height: 60,
        // marginBottom: 5,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,  
        elevation: 20,
    }
})

export default Button