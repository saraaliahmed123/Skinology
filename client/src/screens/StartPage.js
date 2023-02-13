import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../componenets/Button';
import Heading from '../componenets/Heading';

const StartPage = ({navigation}) => {
  return (
    <SafeAreaView>
     <View style={styles.page}>
        <Heading width={"15%"}/>
        <View style={styles.contentView}>
            <View style={styles.content}>
                <Image style={styles.image}
                        source={require('../componenets/img3.jpg')}
                />
            </View>

            <View style={styles.contentTxt}>
                <Text style={styles.hi}>Hi there,</Text>
                <Text style={styles.txt}>Answer a few questions to start personalizing your skin care routine</Text>

            </View>
        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Continue"}
                onPress={() => {navigation.navigate("SkinTypePage")}}
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
    image:{
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    content:{
        alignItems: "center",
        marginTop: 10
    },
    contentTxt:{
        alignItems: "center",
        marginHorizontal: 20
    },
    hi:{
        marginTop: 10,
        marginBottom: 20,
        color: "#686868"
    },
    txt:{
        fontSize: 20,
        textAlign: "center"
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
        marginBottom: "30%"
    }
})

export default StartPage