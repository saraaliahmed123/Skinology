import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button'

const IndexScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.page}>
        <Text style={styles.heading}>SKINOLOGY</Text>
        <View style={styles.buttonAndText}>
            <Button 
                text={"Get Started"}
                onPress={() => {navigation.navigate("StartPage")}}
                sty={"white"}
            />
            <View style={styles.haveAccounttxtView}>
            <Text style={styles.havetxt}>Already have an account?</Text>
            <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {navigation.navigate("LogIn")}}
            >
                <Text style={styles.haveAccounttxt}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
        <Image style={styles.image}
                source={require('../componenets/img2.png')}
        />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    heading:{
        fontSize: 45,
        alignSelf: "center",
        marginTop: 35,
        color: "white",
        fontWeight: '300'
    },
    haveAccounttxt:{
        fontWeight: 'bold'
    },
    buttonAndText:{
        height: "20%",
        marginHorizontal: 25,
        justifyContent: "center",
    },
    haveAccount:{
        alignSelf: "center",
        marginTop: 10,
    },
    image:{
        position: "absolute",
         zIndex: -1,
        borderWidth: 4,
        height: 730,
        width: 440,
    },
    haveAccounttxtView:{
        flexDirection: "row",
        justifyContent: "center",
    },
    havetxt:{
        alignSelf: "center",
        marginTop: 10,
        color: "white",
        marginRight: 5
    }
})

export default IndexScreen