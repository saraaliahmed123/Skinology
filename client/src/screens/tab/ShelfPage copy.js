import {React, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useShelfContext } from '../../context/ShelfContext'

const ShelfPage = ({navigation}) => {

    const {getShelf, deleteItemInShelf} = useShelfContext()

    const [shelf, setShelf] = useState()

    useEffect(() => {
        const sub = async () => {
          const items = await getShelf()
          setShelf(items)
        }
        sub()
      }, [])

    const getItems = () => {
    if (shelf)
    {
      return shelf.items.map((item, key) => {
        return(
          <View style={styles.product} key = {key}>
            <View style={styles.shelfLine}>
            
            <TouchableOpacity style={styles.cross} onPress={async () => {
                    const shelf = await deleteItemInShelf(item)
                    setShelf(shelf)
                  
                  }}>
                  <Feather name="x" size={24} color="#3D5744" />
            </TouchableOpacity>

          <TouchableOpacity style={styles.itemOpacity} 
           onPress={() => {
            navigation.navigate("ProductPage", 
            {item:item}
            )
          }}>
            <View>
              <View style={{width: "100%", height: 120}}>
                <Image style={styles.image}
                      source={{uri: item.image}}
                />
              </View>
              <View style={styles.producttxtBox}>
                  <Text style={styles.producttxt}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
                <Text style={styles.heading}>Shelf</Text>
                <View style={styles.products}>
                    {getItems()}
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
      margin: 25,
      // marginHorizontal: 30,
      alignItems: "center",
    },
    products:{
        // marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 30,
        width: "100%"
      },
      product:{
        borderBottomColor: "#3D5744",
        borderBottomWidth: 4,
        width: "50%",

        // borderWidth: 0.5,
        // borderColor: "red",
        paddingHorizontal: 10
     
      },
      shelfLine:{
        // borderBottomColor: "#3D5744",
        // borderBottomWidth: 2,

        width: "100%",
        // height: "8%",
        // marginHorizontal: 8,
        marginTop: 20,
        marginBottom: 5,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: "red",

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
      },
      image:{
        width: "100%",
        height: "100%",
        borderWidth: 0.5
      },
      producttxt:{
        textAlign: "center",
        fontSize: 10
      },
      producttxtBox:{
        // marginTop: 7,
        marginBottom: 5,
        // borderWidth: 0.5
      },
      cross:{
        // alignSelf: "flex-end",
        // marginVertical: 5,
        // marginLeft: 10
        position: 'absolute',
        right:     0,
        top:      0,
        zIndex: 100,
        margin: 3
      },
      itemOpacity:{ 
        backgroundColor: "white", 
        justifyContent: "space-around", 
        overflow: "hidden",
        padding: 10,
        borderRadius: 10,
        height: 170
      },
      heading:{
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20,
      },


})

export default ShelfPage
