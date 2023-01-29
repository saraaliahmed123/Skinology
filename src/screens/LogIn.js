import {React, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button'
import InputBox from '../componenets/InputBox'

const LogIn = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


  return (
    <SafeAreaView>
    <View style={styles.page}>
        <Text style={styles.heading}>SKINOLOGY</Text>
        <View style={styles.inputView}>
            <View style={styles.inputViewB}>
            <InputBox 
                placeholder="Email" 
                value={email}
                setter={setEmail}
            />
            </View>

            <InputBox 
                placeholder="Password" 
                value={password}
                setter={setPassword}
            />

        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"LOGIN"}
                onPress={() => {navigation.navigate("CreateAccount")}}
                sty={"#3D5744"}
            />
            <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {navigation.navigate("IndexScreen")}}
            >
                <Text style={styles.haveAccounttxt}>Back</Text>
            </TouchableOpacity>
        </View>
        <Image style={styles.image}
                source={require('../componenets/Picture17.png')}
        />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
    },
    inputViewB:{
        height: 100
    },
    heading:{
        fontSize: 45,
        alignSelf: "center",
        marginTop: 35,
        color: "white",
        fontWeight: '300'
    },
    haveAccounttxt:{
        color: "white"
    },
    buttonAndText:{
        height: "22%",
        marginHorizontal: 25,
        justifyContent: "center",
        //marginBottom: 3
    },
    haveAccount:{
        alignSelf: "center",
       // marginTop: 15,
        marginTop: 15,
    },
    image:{
        position: "absolute",
         zIndex: -1,
        height: 730,
        width: 360,

    },
    input: {
        backgroundColor: "#D9D9D9",
        padding: 20,
        margin: 25,
        marginTop: 30,
        borderRadius: 30,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,  
        elevation: 20,
      },
      inputView:{
        marginTop: "25%"
      }
})

export default LogIn