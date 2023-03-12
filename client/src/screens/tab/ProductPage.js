import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../componenets/Card'
import { useUserContext } from '../../context/UserContext';

const ProductPage = ({navigation}) => {
  const {getReviews} = useUserContext()

  const route = useRoute()
  const item = route.params.item

  const [reviews, setReviews] = useState();

  useEffect(() => {
    const sub = async () => {
      // console.log(item)
      const reviews = await getReviews(item)
      // console.log(reviews.image)
      setReviews(reviews)
    }
    sub()
  }, [reviews])

  //console.log("HERE")

  const getStars = () => {
    const hi = []
    for (let i = 0; i< Math.floor(item.rank); i++)
    {
      // console.log(i)
      let stars = (
        <Image key={i} style={styles.star}
            source={require('../../componenets/images/star.png')}
        />
      )
      hi.push(stars)
    }
    // console.log(hi)
    return(
      <View style={styles.stars}>
        {hi.map((item, key) => {
          return(
            <View key={key}>
              {item}
            </View>
          )
        })}
      </View>
    )
  }

  const getCusomerStars = (item) => {
    const hi = []
    for (let i = 0; i< Math.floor(item.stars); i++)
    {
      // console.log(i)
      let stars = (
        <Image style={styles.starCustomer}
            source={require('../../componenets/images/star.png')}
        />
      )
      hi.push(stars)
    }
    // console.log(hi)
    return(
      <View style={styles.stars}>
        {hi.map((item, key) => {
          return(
            <View key={key}>
              {item}
            </View>
          )
        })}
      </View>
    )
  }


  const getCustomerReviews = () => {
    if (reviews)
    {
      return reviews.map((item, key) => {
        return (
            <View key={key} style={styles.customerReview}>
              <View style={styles.customerReviewTop}>
                <Text style={styles.customerId}>{item.user}</Text>
                <View style={styles.stars}>
                  {getCusomerStars(item)}
                </View>
              </View>
              <View style={styles.customertxtView}>
                <Text style={styles.customertxt}>{item.comment}</Text>
              </View>
            </View>
        )
      })
    }
  }

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.page}>
          <View style={styles.top}>
            <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.navigate("Search")}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.itemHeadingView}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.itemView}>
            <Image style={styles.image}
                  source={{uri: item.image}}
            />
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>SKIN TYPES:</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.cardView}>
                <Card img={item.Label === "Serum" ? item.skinConcern : item.skinType} noSelect={true}/>
            </View>
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>INGREDIENTS:</Text>
          </View>
          <View style={styles.ingredients}>
              <ScrollView>
                  <Text>{item.ingredients}</Text>
              </ScrollView>
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>REVIEWS:</Text>
          </View>
          <View style={styles.ratingView}>
            <View>
              <Text style={styles.average}>Average:</Text>
            </View>
            <View style={styles.ratingAverageView}>
              <Text style={styles.rating}>{item.rank}/5</Text>
              <View style={styles.stars}>
                {getStars()}
                <Image style={styles.Halfstar}
                    source={require('../../componenets/images/Half_Star.png')}
                />
              </View>
            </View>
            <View style={styles.customerReviews}>
              <View style={styles.customerReviewsBox}>
                {getCustomerReviews()}
              </View>

              <View style={styles.reviewButtonView}>
                <TouchableOpacity style={styles.reviewButton} onPress={() => {
                  navigation.navigate("ReviewPage", 
                  {item:item})
                }}>
                  <AntDesign style={styles.reviewButtonIcon} name="edit" size={24} color="white" />
                </TouchableOpacity>
              </View>

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
    margin: 10,
    justifyContent: "center",
  },
  image:{
    width: "80%",
    height: 230
  },
  addToShelf:{
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1000,
  },
  contentView:{
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    // marginTop: 5,
  },
  cardView:{
    marginHorizontal: 15
  },
  itemHeadingView:{
    marginHorizontal: 30,
    alignItems: "center"
  },
  itemView:{
    backgroundColor: "white",
    marginHorizontal: 30,
    marginTop: 30,
    height: 250,
    borderRadius: 10,
    alignItems: "center"
  },
  skinTypeView:{
    marginHorizontal: 30,
    backgroundColor: "#3D5744",
    borderRadius: 5,
    padding: 2,
    marginTop: 30
  },
  skinType:{
    marginLeft: 5,
    color: "white",
    fontSize: 13
  },
  ingredients:{
    marginHorizontal: 30,
    marginTop: 25,
  },
  star:{
    width: 30,
    height: 30,
    marginBottom: 5,
    marginHorizontal: 2
  },
  Halfstar:{
    marginBottom: 5,
    height: 30,
    width: 16,
    marginHorizontal: 2
  },
  rating:{
    fontSize: 30,
  },
  average:{
    fontSize: 13
  },
  ratingView:{
    marginHorizontal: 30,
    marginTop: 25,
  },
  ratingAverageView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  stars:{
    flexDirection: "row"
  },
  customerReview:{
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
  },
  customerReviewTop:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  starCustomer:{
    width: 20,
    height: 20,
    marginHorizontal: 2
  },
  HalfstarCustomer:{
    height: 20,
    width: 8,
    marginHorizontal: 2
  },
  customerId:{
    fontSize: 10
  },
  customertxtView:{
    marginTop: 6
  },
  customertxt:{
    fontSize: 11
  },
  customerReviewsBox:{
    marginBottom: 60,
  },
  reviewButton:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3D5744",
    justifyContent: "center",
    alignItems: "center"
  },
  reviewButtonIcon:{
    alignSelf: "center",
    marginRight: 3
  },
  reviewButtonView:{
   position: "absolute",
   bottom: 10,
   right: 2
  }
})

export default ProductPage