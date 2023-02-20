import {React, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componenets/Button'
import InputBox from '../componenets/InputBox'

import {useUserContext} from '../context/UserContext';
import { useRoutineContext } from '../context/RoutineContext'
import { useShelfContext } from '../context/ShelfContext'

const CreateAccount = ({navigation}) => {

    const {CreateAccount, user} = useUserContext()
    const {saveRoutine} = useRoutineContext()
    const {createShelf} = useShelfContext()

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // if (user){
    //     console.log(user)
    // }

  return (
    <SafeAreaView>
    <View style={styles.page}>
        <Text style={styles.heading}>SKINOLOGY</Text>
            <Text style={styles.hi}>
                Let's sign up, to save your progress
            </Text>
        <View style={styles.inputView}>

            <InputBox 
                placeholder="First Name" 
                value={firstName}
                setter={setFirstName}
                autoCapitalize='sentences'
            />

            <InputBox 
                placeholder="Last Name" 
                value={lastName}
                setter={setLastName}
                autoCapitalize='sentences'
            />

            <InputBox 
                placeholder="Email" 
                value={email}
                setter={setEmail}
            />

            <InputBox 
                placeholder="Password" 
                value={password}
                setter={setPassword}
            />

        </View>
        <View style={styles.buttonAndText}>
            <Button 
                text={"CREATE ACCOUNT"}
                onPress={async () => {
                    if (firstName && lastName && email && password)
                    {
                    try{
                        const id = await CreateAccount(firstName, lastName, email, password)
                        try{
                            const here = await saveRoutine(id)
                            try{
                                await createShelf(id, here)
                                navigation.navigate("Main")
                            }
                            catch(e){
                                alert("Could not create account")
                            }
                        }
                        catch(e)
                        {
                            alert("Could not create account")
                        }
                        
                    }
                    catch(e){
                        alert("Could not create account")
                    }
                    }
                    else
                    {
                        alert("Please enter your details")
                    }
                    
                    // console.log(id)
                    // const here = await saveRoutine(id)
                    // console.log(here)
    
                    
                }}
                sty={"#3D5744"}
            />
            <TouchableOpacity 
                style={styles.haveAccount}
                onPress={() => {navigation.pop()}}
            >
                <Text style={styles.haveAccounttxt}>Back</Text>
            </TouchableOpacity>
        </View>
        <Image style={styles.image}
                source={require('../componenets/here.png')}
        />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
       // backgroundColor: "rgba(61, 87, 68, 0.3)"
    },
    heading:{
        fontSize: 45,
        alignSelf: "center",
        marginTop: 35,
        color: "white",
        fontWeight: '300',
    },
    haveAccounttxt:{
        color: "white"
    },
    buttonAndText:{
        height: "20%",
        marginHorizontal: 30,
        justifyContent: "center",
 
    },
    haveAccount:{
        alignSelf: "center",
        marginTop: 10,
    },
    image:{
        position: "absolute",
         zIndex: -1,
        // height: 730,
        // width: 360,
        height: 730,
        width: 399,

    },
    inputView:{
        marginTop: "10%",
        marginHorizontal: 5,
      },
      hi:{
        color: "white",
        textAlign: "center"
      }
})

export default CreateAccount