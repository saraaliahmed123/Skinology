import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Button from '../componenets/Button';
import Card from '../componenets/Card';
import Heading from '../componenets/Heading';

const SkinTypePage = ({navigation}) => {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardSelection = (selectedCard) => {
        console.log(selectedCard)
        setSelectedCards([...selectedCards, selectedCard]);
    }

  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"30%"}/>
        <View style={styles.contentViewheading}>
            <Text style={styles.heading}>What is your skin type?</Text>
            <View style={styles.contentView}>

            <Card img={"Combination"} onSelect={handleCardSelection} />
            <Card img={"Normal"} onSelect={handleCardSelection} />
            <Card img={"Sensitive"} onSelect={handleCardSelection} />
            <Card img={"Oily"} onSelect={handleCardSelection} />
            <Card img={"Dry"} onSelect={handleCardSelection} />
            <Card img={"I don't know?"} onSelect={handleCardSelection} />
                
            </View>
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Continue"}
                onPress={() => {
                    navigation.navigate("SkinConcernPage", { selectedCards });
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
        fontSize: 28,
        textAlign: "center",
        fontWeight: '300'
    }
})

export default SkinTypePage