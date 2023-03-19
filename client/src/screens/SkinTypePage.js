import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Button from '../componenets/Button';
import Card from '../componenets/Card';
import Heading from '../componenets/Heading';
import { useUserContext } from '../context/UserContext';

const SkinTypePage = ({navigation}) => {
    const {setInformation} = useUserContext()

    const [skinType, setSkinType] = useState();

    const handleCardSelection = (selectedCard) => {
        let arr = [];
        let bo = false;
        if (skinType) {
            skinType.forEach((item) => {
                if (item !== selectedCard) {
                arr.push(item);
                }
                else
                {
                    bo = true;
                }
            });
            if (bo === false) {
                arr.push(selectedCard)
            }
            if (skinType.length === 0) {
                setSkinType([selectedCard]); 
            }
            else {
                setSkinType(arr);
            }
        } else {
          arr.push(selectedCard);
          setSkinType(arr);
        }
    }

    // console.log(skinType)

  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"30%"}/>
        <View style={styles.contentViewheading}>
            <Text style={styles.heading}>What is your skin type?</Text>
            <Text style={styles.hi}>You can select more than one</Text>
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
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Continue"}
                onPress={() => {
                    if (skinType)
                    {
                        setInformation({ "skinType" : skinType })
                        navigation.navigate("SkinConcernPage");
                    }
                    else
                    {
                        alert("Please select a skin type")
                    }
                }}
                sty={"#3D5744"}
            /> 
            {/* <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {navigation.navigate("CreateAccount")}}
            >
                <Text>Skip</Text>
            </TouchableOpacity>  */}
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
         justifyContent: "space-between",
        backgroundColor: "#ECECEE"
    },
    buttonAndText:{
        height: "20%",
        marginHorizontal: 25,
        // marginTop: "45%",
        justifyContent: "center",
    },
    haveAccount:{
        alignSelf: "center",
       // marginTop: 15,
        marginTop: 15,
    },
    contentView:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        justifyContent: "center",
        // marginTop: 5,
        
    },
    contentViewheading:{
         marginTop: "3%",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: '350'
    },
    hi:{
        marginTop: 10,
        color: "#686868",
        fontSize: 10
    },
    cardView:{
        marginHorizontal: 15
    }
})

export default SkinTypePage