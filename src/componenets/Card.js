import {React, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'


const images = {

};

const Card = ({ img, onSelect }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => {
        setSelected(!selected); 
        onSelect(img)
      }}
      
      >
        <View style={styles.imgview}>
          <Image style={!selected ? styles.image : [styles.image,styles.imageSelected]}
            source={images[img]}
          />
        </View>
        <Text style={styles.txt}>{img}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 90,
    marginHorizontal: 25,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:0.5
  },
  image:{
    width: "100%",
    height: "100%",
    borderRadius: 7,
    alignSelf: "center",
    opacity: 0.9,
  },
  imgview:{
    width: "90%",
    height: "92%",
    borderRadius: 7,
    // backgroundColor: "black"
    backgroundColor: "white"
  },
  imageSelected:{
    // opacity: 0.4,
    borderColor: "#3D5744",
    borderWidth: 4
  },
  txt:{
    textAlign: "center",
    marginTop: 5,
  }
})

export default Card