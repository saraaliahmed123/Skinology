import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Camera = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.page}>
          <View style={styles.top}>
            <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.goBack()}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.itemHeadingView}>
            <Text style={styles.heading}>Pictures</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.cross}>
                    <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.imageView}>

                </View>
            </View>
          </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    top:{
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: "row",
        height: 30,
        // borderBottomWidth: 0.5
      },
      page:{
        margin: 10,
        justifyContent: "center",
      },
      itemHeadingView:{
        marginHorizontal: 30,
        alignItems: "center"
      },
      heading:{
        fontSize: 20
      },
      contentView:{
        margin: 30,
        flexDirection: "row",
        flexWrap: "wrap"
      },
      content:{
        width: 110,
        height: 130,
        margin:15
      },
      imageView:{
        borderWidth: 0.5,
        width: "90%",
        height: "80%"
      },
      cross:{
        alignSelf: "flex-end",
        marginVertical: 5
      }
})

export default Camera