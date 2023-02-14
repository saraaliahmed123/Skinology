import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Button from '../../componenets/Button';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native"
import { useUserContext } from '../../context/UserContext';

const ReviewPage = ({navigation}) => {
    const {addReview} = useUserContext()

    const [comment, setComment] = useState()
    const [stars, setStars] = useState()

    const [review, setReview] = useState();

    useEffect(() => {
        const here = () => {
            setComment()
            setStars()
        }
        here()
    }, [review])

    const route = useRoute()
    const item = route.params?.item

    // console.log(item)

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
            <Text style={styles.itemHeading}>Your Review</Text>
          </View>
          <View style={styles.commentBigView}>
            <View>
                <Text style={{marginLeft: 6}}>Comment:</Text>
                <View style={styles.commentView}>
                    <TextInput 
                        style={styles.input} 
                        value={comment}
                        onChangeText = {(text) => setComment(text)}
                    />
                </View>
            </View>
            <View>
                <Text style={{marginLeft: 6, marginTop: 10}}>Stars:</Text>
                <View style={{flexDirection: "row", marginTop: 10, marginBottom: 30}}>
                    <TouchableOpacity onPress={() => {
                        setStars(1)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={45} color={stars !== 0 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(2)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={45} color={stars >= 2 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(3)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={45} color={stars >= 3 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(4)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={45} color={stars >= 4 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(5)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={45} color={stars >= 5 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{marginLeft: 6}}>
                <Button 
                    text={"SAVE REVIEW"}
                    onPress={async () => {
                        //console.log(item._id)
                        setReview(comment)
                        await addReview(comment, stars, item)
                        navigation.navigate("ProductPage", {item: item})
                        //navigation.goBack()
                    }}
                    sty={"#3D5744"}
                /> 
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
    itemHeading:{
        fontSize: 18
    },
    commentView:{
        height: 200
        // padding: 5
    },
    commentBigView:{
        margin: 15,
        marginTop: 20
    },
    input:{
        backgroundColor: "#D9D9D9",
        padding: 20,
        margin: 10,
        borderRadius: 5,
        height: "90%"
    }
})

export default ReviewPage