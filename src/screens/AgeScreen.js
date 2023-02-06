import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button';
import Heading from '../componenets/Heading';
import { useRoute } from "@react-navigation/native"
import InputBox from '../componenets/InputBox';

const AgeScreen = ({navigation}) => {

    const route = useRoute()
    const skinType = route.params?.skinType

    const skinConcern = route.params?.skinConcern

    const gender = route.params?.gender

    console.log(gender)

    const [age, setAge] = useState()

  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"90%"}/>
        <View style={styles.contentViewheading}>
            <Text style={styles.heading}>What is your age?</Text>
            <Text style={styles.hi}>
                This will help is to personalise a skincare routine that suits your age group
            </Text>
            <View style={styles.contentView}>

                <InputBox
                    placeholder={"Age"}
                    value={age}
                    setter={setAge}
                />
           
                
            </View>
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Create A Routine"}
                onPress={() => {
                    navigation.navigate("ResultsPage", { skinType, skinConcern, gender, age });
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
        marginBottom: 10,
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
        
    },
    contentViewheading:{
         marginBottom: "13%",
        marginHorizontal: 30,
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
        fontSize: 10,
        textAlign: "center"
    },
})

export default AgeScreen