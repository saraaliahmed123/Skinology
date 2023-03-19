import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Button from '../componenets/Button';
import Checkbox from 'expo-checkbox';

const TermsConditions = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView>
    <View style={styles.page}>
        <Text>TERMS AND CONDITIONS</Text>  

        <View style={styles.tandc}>
            <Text style={styles.text}>
            Our skincare app provides personalized product 
            recommendations based on your skin type and concerns. 
            By using our app, you agree to provide accurate information 
            about your skin and to use the recommended products at your 
            own risk. We cannot guarantee specific results and will not be 
            held responsible for any adverse reactions. Your use of the app and 
            products is subject to our privacy policy, which may be updated from time to time.
            </Text>

        </View>

        <View style={styles.buttonAndText}>
            <View style={styles.boxAndText}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? 'green' : undefined}
                />
                <Text>I accept the terms and conditions</Text>
            </View>
            <Button 
                text={"Continue"}
                onPress={() => {isChecked ? navigation.navigate("Main") : alert("Please accept the terms and conditions")}}
                sty={"#3D5744"}
            />
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10
    },
    tandc:{
        backgroundColor: "white",
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
        padding: 25,
        borderRadius: 5
    },
    buttonAndText:{
        height: "20%",
        width: "83%",
       // marginHorizontal: 30,
        justifyContent: "center",
    },
    boxAndText:{
        flexDirection: "row",
        marginVertical: 35,
        marginHorizontal: 10
    },
    checkbox:{
        marginRight: 10,
        marginTop: 1.5
    },
    text:{
        textAlign: "center"
    }
})

export default TermsConditions