import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button';
import Card from '../componenets/Card';
import Heading from '../componenets/Heading';
import { useRoute } from "@react-navigation/native"

const SkinConcernPage = ({navigation}) => {
    const [skinConcern, setSkinConcern] = useState([]);

    const handleCardSelection = (selectedCard) => {
        console.log(selectedCard)
        setSkinConcern([...skinConcern, selectedCard]);
    }

    const route = useRoute()
    const skinType = route.params?.skinType


  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"50%"}/>
        <View style={styles.contentViewheading}>
            {/* <Image style={styles.image}
                        source={require('../componenets/shampoo.png')}
                /> */}
            <Text style={styles.heading}>What is your skin concern?</Text>
            <Text style={styles.hi}>You can select more than one</Text>
            <View style={styles.contentView}>
                <View style={styles.cardView}>
                    <Card img={"Oil Control"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Anti-aging"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Pigmentation"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Acne"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Blackheads"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Hydration"} onSelect={handleCardSelection} />
                </View>
                
            </View>
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Continue"}
                onPress={() => {
                    navigation.navigate("GenderPage", { skinType, skinConcern });
                }}
                sty={"#3D5744"}
            /> 
            <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {navigation.navigate("CreateAccount")}}
            >
                <Text>Skip</Text>
            </TouchableOpacity> 
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
        // marginBottom: "3%",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: '350'
    },
    image:{
        width: 45,
        height: 50,
       // margin: 15,
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

export default SkinConcernPage