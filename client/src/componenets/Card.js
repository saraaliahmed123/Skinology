import {React, useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useRoutineContext } from '../context/RoutineContext'

const images = {
  "Sensitive": require('../componenets/images/sensitive.jpg'),
  "Oily": require('../componenets/images/oily333.jpg'),
  "Combination": require('../componenets/images/combination.jpg'),
  "Normal": require('../componenets/images/normal.jpg'),
  "Dry": require('../componenets/images/dry3333.jpg'),
  "I don't know?": require('../componenets/images/Idont1.jpg'),
  "Anti-aging": require('../componenets/images/antiaging.jpg'),
  "Hydration": require('../componenets/images/hydration.jpg'),
  "Acne": require('../componenets/images/acne.jpg'),
  "Oil Control": require('../componenets/images/oilcontrol2.jpg'),
  "Pigmentation": require('../componenets/images/pigmentation.jpg'),
  "Blackheads": require('../componenets/images/blackheads2.jpg'),
  "All": require('../componenets/images/all3.jpg'),
  //"http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg"
}


const Card = ({ img, onSelect, noSelect, resultsPage, homePage, account }) => {
  const {routine} = useRoutineContext()
  
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity 
     disabled={noSelect}
      style={styles.card}
      onPress={() => {
        if (noSelect === false || noSelect === undefined || resultsPage === true)
        {
          setSelected(!selected); 
          onSelect(img)
          // console.log(selected)
        }

      }}
      
      >
        <View style={!selected ? styles.imgview : noSelect ? styles.imgview : [styles.imgview,styles.imageSelected]}>
          <Image style={!selected ? styles.image : noSelect ? styles.image : !homePage && !routine ? [styles.imageskin,styles.imageSSelected] : [styles.image,styles.imageSSelected]}
               source={
                homePage && routine ? Array.isArray(routine) && routine.length > 1 ? {uri: routine[1][img]["image"]} : {uri: routine[img]["image"]} : images[img]
               // { uri: homePage && routine ? Array.isArray(routine) && routine.length > 1 ? routine[1][img]["image"] : routine[img]["image"] : images[img]} 
              }
          />
        </View>
        <Text style={account ? styles.txt : resultsPage ? [styles.txt, {color: "white"}] : styles.txt}>{img}</Text>
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
    width: "89%",
    height: "90%",
    borderRadius: 3,
    alignSelf: "center",
  },
  imageskin:{
    borderWidth: 0.5,
    width: "100%",
    height: "100%",
    borderRadius: 4,
    alignSelf: "center",
  },
  imgview:{
    width: "90%",
    height: "92%",
    borderRadius: 7,
    // backgroundColor: "black"
    backgroundColor: "white",
    justifyContent: "center"
    
   // borderWidth:0.5
  },
  imageSelected:{
    // opacity: 0.4,
    borderColor: "#3D5744",
    borderWidth: 4.5,
    // backgroundColor: "#3D5744",
  },
  imageSSelected:{
    opacity: 0.95,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  txt:{
    textAlign: "center",
    marginTop: 5,
  }
})

export default Card