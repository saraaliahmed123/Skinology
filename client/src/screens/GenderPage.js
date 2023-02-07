import {React} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button';
import Heading from '../componenets/Heading';
import { useRoute } from "@react-navigation/native"

const GenderPage = ({navigation}) => {

    const route = useRoute()
    const skinType = route.params?.skinType

    const skinConcern = route.params?.skinConcern


  return (
    <SafeAreaView>
    <View style={styles.page}>
            <Heading width={"70%"}/>
        <View style={styles.contentViewheading}>
            <Text style={styles.heading}>What is your gender?</Text>
            <Text style={styles.hi}>
                The gender difference helps us to tailor the recomendation to a specific skin type
            </Text>
        </View>
        <View style={styles.buttonAndTextGender}>
            <Button 
                text={"Female"}
                onPress={() => {
                    navigation.navigate("AgeScreen", { skinConcern, skinType, gender: "Female" });
                }}
                sty={"#ECECEE"}z
            /> 
        </View>

        <View style={styles.buttonAndTextGender}>
            <Button 
                text={"Male"}
                onPress={() => {
                    navigation.navigate("AgeScreen", { skinConcern, skinType });
                }}
                sty={"#ECECEE"}
            /> 
        </View>
            <View style={styles.buttonAndTextGender}>
            <Button 
                text={"Non-binary"}
                onPress={() => {
                    navigation.navigate("AgeScreen", { skinConcern, skinType });
                }}
                sty={"#ECECEE"}
            /> 
        </View>
            <View style={styles.buttonAndTextGender}>
            <Button 
                text={"Prefer not to say"}
                onPress={() => {
                    navigation.navigate("AgeScreen", { skinConcern, skinType });
                }}
                sty={"#ECECEE"}
            /> 
        </View>
        
        <View style={styles.buttonAndText}>
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
        height: "18%",
        marginHorizontal: 25,
        marginBottom: 10,
        // marginTop: "45%",
        justifyContent: "center",
    },
    buttonAndTextGender:{
        //height: "55%",
        marginHorizontal: 35,
        justifyContent: "center",
         borderWidth: 3,
         borderColor: "#3D5744"
    },
    haveAccount:{
        alignSelf: "center",
        marginTop: 15,
    },
    contentView:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        justifyContent: "center",
        flexDirection: "column",
        // borderWidth: 0.5
        // marginTop: 5,
        
    },
    contentViewheading:{
        // marginBottom: "3%",
        marginHorizontal: 30,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 0.5,
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

export default GenderPage