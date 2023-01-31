import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Heading = ({width}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.top}>
        <TouchableOpacity
        style={styles.back}
        onPress={() => {navigation.pop()}}
        >
            <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.barView}>
            <View style={[styles.bar, {width: width}]}>

            </View>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
    barView:{
        width: "80%",
        height: "21%",
        marginVertical: 9,
        backgroundColor: "#D9D9D9",
    },
    back:{
        width: "15%"
    },
    top:{
        marginTop: 30,
        marginHorizontal: 30,
        flexDirection: "row",
        height: "5%",
        // borderBottomWidth: 0.5
    },
    bar: {
        height: "100%",
        backgroundColor: "#3D5744",
    },
})

export default Heading