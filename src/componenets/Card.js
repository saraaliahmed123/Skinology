import {React, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'


const images = {
  // "Combination": require('../componenets/skintype3.jpg'),
  // "Oily": require('../componenets/skintype4.png'),
  // "Dry": require('../componenets/skintype1.png'),
  // "Normal": require('../componenets/skintype2.jpg'),
  // "Sensitive": require('../componenets/skintype5.jpg'),
  // "I don't know?": require('../componenets/skintype6.png'),

  // "Combination": require('../componenets/combination.png'),
  // "Oily": require('../componenets/oily.png'),
  // "Dry": require('../componenets/dry.png'),
  // "Normal": require('../componenets/normal.png'),
  // "Sensitive": require('../componenets/sensitive-skin.png'),
  // "I don't know?": require('../componenets/skintype6.png'),

  // "Combination": require('../componenets/combination.png'),
  // "Oily": require('../componenets/dry3.png'),
  // "Dry": require('../componenets/skin.png'),
  // "Normal": require('../componenets/skin.png'),
  // "Sensitive": require('../componenets/sensitive-skin.png'),
  // "I don't know?": require('../componenets/skintype6.png'),
};

const Card = ({ img, onSelect, noSelect }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity 
     disabled={noSelect}
      style={styles.card}
      onPress={() => {
        if (!noSelect && !results)
        {
        setSelected(!selected); 
        onSelect(img)
        }
      }}
      
      >
        <View style={styles.imgview}>
          <Image style={!selected ? styles.image : noSelect ? styles.image : [styles.image,styles.imageSelected]}
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
    // marginHorizontal: 25,
    marginRight: 5,
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
    backgroundColor: "white",
    
   // borderWidth:0.5
  },
  imageSelected:{
    // opacity: 0.4,
    borderColor: "#3D5744",
    borderWidth: 4,
    backgroundColor: "#3D5744",
  },
  txt:{
    textAlign: "center",
    marginTop: 5,
  }
})

export default Card