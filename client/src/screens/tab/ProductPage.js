import React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../componenets/Card'

const ProductPage = ({navigation}) => {
  const route = useRoute()
  const item = route.params?.item

  console.log("HERE")

  return (
    <SafeAreaView>
    <ScrollView>
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
            <Text>Innisfree - The green tea seed serum</Text>
          </View>
          <View style={styles.itemView}>
            <TouchableOpacity style={styles.addToShelf} onPress={() => {console.log("jgfiewl")}}>
              <AntDesign name="pluscircleo" size={23} color="black" />
            </TouchableOpacity>
            <Image style={styles.image}
                  source={require('../../componenets/image24.png')}
            />
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>SKIN TYPES:</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.cardView}>
                <Card img={"Combination"} noSelect={true}/>
            </View>
            <View style={styles.cardView}>
                <Card img={"Normal"} noSelect={true}/>
            </View>
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>INGREDIENTS:</Text>
          </View>
          <View style={styles.ingredients}>
            <Text>Ingredients eiufgqioufbqo</Text>
          </View>
          <View style={styles.skinTypeView}>
            <Text style={styles.skinType}>REVIEWS:</Text>
          </View>
          <View style={styles.ratingView}>
            <View>
              <Text style={styles.average}>Average:</Text>
            </View>
            <View style={styles.ratingAverageView}>
              <Text style={styles.rating}>3.5/5</Text>
              <View style={styles.stars}>
                <Image style={styles.star}
                    source={require('../../componenets/star.png')}
                />
                <Image style={styles.star}
                    source={require('../../componenets/star.png')}
                />
                <Image style={styles.star}
                    source={require('../../componenets/star.png')}
                />
                <Image style={styles.Halfstar}
                    source={require('../../componenets/Half_Star.png')}
                />
              </View>
            </View>
            <View>
              <View style={styles.customerReview}>
                <View style={styles.customerReviewTop}>
                  <Text style={styles.customerId}>CustomerID</Text>
                  <View style={styles.stars}>
                    <Image style={styles.starCustomer}
                        source={require('../../componenets/star.png')}
                    />
                    <Image style={styles.starCustomer}
                        source={require('../../componenets/star.png')}
                    />
                    <Image style={styles.HalfstarCustomer}
                      source={require('../../componenets/Half_Star.png')}
                    />
                  </View>
                </View>
                <View style={styles.customertxtView}>
                  <Text style={styles.customertxt}>enrfeopjrnfreijgnreijgej</Text>
                </View>
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
    borderWidth: 0.5,
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
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  customerReviewTop:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    fontSize: 13
  },
  customertxtView:{
    marginTop: 6
  },
  customertxt:{
    fontSize: 11
  },
})

export default ProductPage