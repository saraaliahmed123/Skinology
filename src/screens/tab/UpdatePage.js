import {React, useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Card from '../../componenets/Card';
import Button from '../../componenets/Button';

const UpdatePage = ({navigation}) => {
     const [selected, setSelected] = useState("Skin Type")

     const [skinType, setSkinType] = useState([]);

    const handleCardSelection = (selectedCard) => {
        console.log(selectedCard)
        setSkinType([...skinType, selectedCard]);
    }

    const [skinConcern, setSkinConcern] = useState([]);

    const handleCardSelection2 = (selectedCard) => {
        console.log(selectedCard)
        setSkinConcern([...skinConcern, selectedCard]);
    }

  return (
    <SafeAreaView>
    <View style={styles.page}>
        <View>
            <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.goBack()}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>


          <View style={styles.headingView}>
            <Text style={styles.heading}>Update Information</Text>
          </View>

          <View style={styles.top}>
            <TouchableOpacity style={selected === "Skin Type" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Skin Type")
            }}>
              <Text style={selected === "Skin Type" ? styles.profileButtontxt :styles.profileButtontxtNot}>Skin Type</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selected === "Skin Concern" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Skin Concern")
            }}>
              <Text style={selected === "Skin Concern" ? styles.profileButtontxt :styles.profileButtontxtNot} >Skin Concern</Text>
            </TouchableOpacity>
          </View>
        </View>
        {selected === "Skin Type" ?

        <View style={{marginTop: 10}}>
            <View style={styles.contentView}>
                <View style={styles.cardView}>
                    <Card img={"Combination"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Normal"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Sensitive"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Oily"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Dry"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"I don't know?"} onSelect={handleCardSelection} />
                </View>
                        
            </View>
            <View style={styles.buttonView}>
                <Button 
                    text={"Done"}
                    onPress={()=> {
                        setSelected("Skin Concern")
                    }}
                    sty={"#3D5744"}
                /> 
            </View>
        </View>

        :
        
        <View style={{marginTop: 10}}>
            <View style={styles.contentView}>
                    <View style={styles.cardView}>
                        <Card img={"Oil Control"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Anti-aging"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Pigmentation"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Acne"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Blackheads"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Hydration"} onSelect={handleCardSelection2} />
                    </View>
                    
                </View>
            <View style={styles.buttonView}>
        <Button 
            text={"Done"}
            onPress={()=> {
                navigation.goBack()
            }}
            sty={"#3D5744"}
        /> 
            </View>
        </View>


        }
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
      margin: 30,
      // marginHorizontal: 30,
      alignItems: "center",
    },
    top:{
      flexDirection: "row",
      // marginHorizontal: 40,
      backgroundColor: "#D9D9D9",
      justifyContent: "space-between",
      borderRadius: 20,
      width: 285
    },
    profileButton:{
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      backgroundColor: "#3D5744",
    },
    profileButtonNot:{
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
    },
    profileButtontxt:{
      fontSize: 12,
      color: "white"
    },
    profileButtontxtNot:{
      fontSize: 12,
    },
    heading:{
      marginBottom: 30,
      textAlign: "center",
      fontSize: 20,
    },
    buttonView:{
    // position: "absolute",
    // bottom: 0,
    height: 30,
    width: 35,
    marginBottom: "10%"
  },
  button:{
    width: "100%",
    height: "100%",
    backgroundColor: "#3D5744",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  headingView:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentView:{
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    justifyContent: "center",
    // marginTop: 5,
    
    },
    cardView:{
        marginHorizontal: 15
    },
    buttonView:{
        marginTop: "10%"
    }
})

export default UpdatePage