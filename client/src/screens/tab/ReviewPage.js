import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
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
    <ScrollView>
        <View style={styles.page}>
          <View style={styles.top}>
            <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.navigate("ProductPage", 
            {item:item})}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.itemHeadingView}>

            
            <Text style={styles.itemHeading}>Your Review</Text>
          </View>
          <View style={styles.commentBigView}>
            <View style={styles.itemView}>
                <Image style={styles.image}
                    source={{uri: item.image}}
                />
            </View>
            <View>
                {/* <Text style={{marginLeft: 6, marginTop: 10, textAlign: "center"}}>How much did you like the product?:</Text> */}
                <View style={{flexDirection: "row", marginTop: 20, marginBottom: 15, justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => {
                        setStars(1)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={30} color={stars !== 0 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(2)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={30} color={stars >= 2 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(3)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={30} color={stars >= 3 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(4)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={30} color={stars >= 4 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStars(5)
                        // console.log(stars)
                    }}>
                        <AntDesign style={{margin: 6}} name="star" size={30} color={stars >= 5 ? "#FCCF04" : "black"} />
                    </TouchableOpacity>
                </View>

                <View>
                    {/* <Text style={{marginLeft: 6}}>Comment:</Text> */}
                    <View style={styles.commentView}>
                        <TextInput 
                            style={styles.input} 
                            value={comment}
                            placeholder="Write a review..." 
                            onChangeText = {(text) => setComment(text)}
                        />
                    </View>
                </View>
            </View>

            <View style={{marginHorizontal: 15, marginVertical: 15}}>
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
    </ScrollView>
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
      margin: 7,
      justifyContent: "center",
    },
    itemHeadingView:{
        marginHorizontal: 30,
        marginBottom: 4,
        alignItems: "center"
    },
    itemHeading:{
        fontSize: 18
    },
    commentView:{
        height: 200,
        marginHorizontal: 7
        // padding: 5
    },
    commentBigView:{
        margin: 15,
        marginTop: 20
    },
    input:{
        backgroundColor: "#D9D9D9",
        padding: 20,
        paddingTop: 25,
        margin: 10,
        borderRadius: 5,
        height: "90%",
        alignContent: "flex-start",
        textAlign: "left",
        textAlignVertical: "top"
    },
    itemView:{
        backgroundColor: "white",
        marginHorizontal: 20,
        // marginTop: 30,
        height: 250,
        borderRadius: 10,
        alignItems: "center"
      },
      image:{
        width: "80%",
        height: 230
      },
})

export default ReviewPage