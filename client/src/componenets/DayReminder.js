import {React, useState} from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const DayReminder = ({onSelect, txt}) => {
    const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity style={!selected ? styles.weekDay : [styles.weekDay,styles.weekDaySelected]}
    onPress={() => {
        onSelect(txt)
        setSelected(!selected); 
    }}>
        <Text style={!selected ? styles.weekDaytxt : [styles.weekDaytxt,styles.weekDaytxtSelected]}
        >{txt}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    weekDay:{
        margin: 3,
       borderWidth: 0.5,
       // padding: 5,
       borderRadius: 25,
       width: 40,
       height: 40

   },
   weekDaytxt:{
       textAlign: "center",
       marginTop: 10,
       fontSize: 12
   },
   weekDaySelected:{
    backgroundColor: "#3D5744"
   },
   weekDaytxtSelected:{
    color: "white"
   }
})

export default DayReminder