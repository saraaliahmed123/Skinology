import {React, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button'
import InputBox from '../componenets/InputBox'
import { useUserContext } from '../context/UserContext'
import { useRoutineContext } from '../context/RoutineContext'

const LogIn = ({navigation}) => {

    const {Login, user} = useUserContext()
    const {getRoutine, routine} = useRoutineContext()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <SafeAreaView>
    <View style={styles.page}>
        <Text style={styles.heading}>SKINOLOGY</Text>
        <ScrollView style={{marginTop: 50}}>
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
                onPress={async () => {
                    try{
                        const id = await Login(email, password)
                        if (id)
                        {
                            // console.log(id)
                            try{
                                await getRoutine(id)
                                navigation.navigate("Main")
                            }
                            catch(e){
                                alert("No user was found")
                            }
                         }
                         else
                         { 
                            alert("No user was found")
                         }
                    }
                    catch(e){
                        alert("No user was found")
                    }
                }}
                sty={"#3D5744"}
            />
            <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {
                    navigation.navigate("IndexScreen")
                }}
            >
                <Text style={styles.haveAccounttxt}>Back</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        <Image style={styles.image}
                source={require('../componenets/images/img5neww.png')}
        />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
        borderWidth: 0.5
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
        height: 160,
        marginHorizontal: 30,
        justifyContent: "center",
        // borderWidth: 0.5
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
        width: 395,

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
        marginTop: "13%",
        marginHorizontal: 5,
      }
})

export default LogIn