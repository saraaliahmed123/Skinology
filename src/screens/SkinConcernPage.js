import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button';
import Card from '../componenets/Card';
import Heading from '../componenets/Heading';

const SkinConcernPage = ({navigation}) => {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardSelection = (selectedCard) => {
        console.log(selectedCard)
        setSelectedCards([...selectedCards, selectedCard]);
    }

  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"50%"}/>
        <View style={styles.contentViewheading}>
            <Text style={styles.heading}>What is your skin concern?</Text>
            <View style={styles.contentView}>

            <Card img={"Oil Control"} onSelect={handleCardSelection} />
            <Card img={"Anti-aging"} onSelect={handleCardSelection} />
            <Card img={"Pigmentation"} onSelect={handleCardSelection} />
            <Card img={"Acne"} onSelect={handleCardSelection} />
            <Card img={"Blackheads"} onSelect={handleCardSelection} />
            <Card img={"Hydration"} onSelect={handleCardSelection} />
                
            </View>
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Continue"}
                // onPress={() => {
                //     navigation.navigate("SkinConcernPage", { selectedCards });
                // }}
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
        fontSize: 30,
        textAlign: "center",
        fontWeight: '300'
    }
})

export default SkinConcernPage