import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from '../../componenets/InputBox'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useUserContext } from '../../context/UserContext';
import { useSearchContext } from '../../context/SearchContext';
import { useShelfContext } from '../../context/ShelfContext';

const Search = ({navigation}) => {
  const {addToShelf, getShelf} = useShelfContext()
  const {getProduct, getCleansers, getToners, getSerums, getMoisturizers, getSuncreams} = useSearchContext()

  const [search, setSearch] = useState()
  const [option, setOption] = useState()
  const [products, setProducts] = useState()

  const [shelf, setShelf] = useState()
  const [item, setItem] = useState()

  useEffect(() => {
    const sub = async () => {
      const shelf = await getShelf()
      setShelf(shelf)

      // const products = await getProduct()
      // setProducts(products)
    }
    sub()
  }, [shelf])
  

  const showItems = () => {
    if (products)
    {
      return products.map((item, key) => {
        let exist;
        if (shelf)
        {
          exist = shelf.items.find(element => element.image === item.image);
        }
        return(
          <TouchableOpacity key={key} style={styles.product} onPress={() => {
            navigation.navigate("ProductPage", 
            {item:item}
            )
          }}>
            <View style={{justifyContent: "space-between", height: "100%"}}>

              {
                exist ?
                
                <></>

                :

                <TouchableOpacity style={styles.addToShelf} onPress={async () => {
                  await addToShelf(item)
                  setItem(item)
                  }}>
                  <AntDesign name="pluscircleo" size={20} color="black" />
                </TouchableOpacity>
              }

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
        )
      })
    }
    // else
    // {
    //   return (
    //     <View style={{justifyContent: "center", alignItems: "center"}}>
    //       <Text style={{textAlign: "center"}}>Loading...</Text>
    //     </View>
    //   )
    // }
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.page}>
      <View style={styles.searchBox}>
        <View style={styles.inputBox}>
          <InputBox 
            placeholder="Search Products" 
            value={search}
            setter={setSearch}
            noShaddow={true}
          />
        </View>
        <TouchableOpacity style={[styles.searchButton, {zIndex: 1000}]} onPress={async () => {
          // console.log(search)
          // const here = products.filter(element => element.name.toLowerCase().includes(search.toLowerCase()));
          const here = await getProduct(search)
          // console.log(here)
          setProducts(here)
          setOption()
          
        }}>
          <Ionicons 
            name="ios-search" 
            size={27} 
            color={"black"} 
          />
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        {/* <TouchableOpacity style={option === "All" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("All")
        }}>
          <Text style={styles.optiontxt}>All</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={option === "Cleanser" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("Cleanser")
          const cleansers = await getCleansers()
          setProducts(cleansers)
        }}>
          <Text style={styles.optiontxt}>Cleanser</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Toner" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("Toner")
          const toners = await getToners()
          setProducts(toners)
        }}>
          <Text style={styles.optiontxt}>Toner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Serum" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("Serum")
          const serums = await getSerums()
          setProducts(serums)
        }}>
          <Text style={styles.optiontxt}>Serum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Moisturizer" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("Moisturizer")
          const moisturizers = await getMoisturizers()
          setProducts(moisturizers)
        }}>
          <Text style={styles.optiontxt}>Moisturizer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Suncream" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={async ()=> {
          setOption("Suncream")
          const suncreams = await getSuncreams()
          setProducts(suncreams)
        }}>
          <Text style={styles.optiontxt}>Suncream</Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.products}>
        {showItems()}
      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchBox:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton:{
    marginTop: 25,
  },
  inputBox:{
    width: "70%",
    marginRight: 15
  },
  page:{
    marginVertical: 10,
  },
  options:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 25,
    marginLeft: 30,
  },
  option:{
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "white"
  },
  optionSelect:{
    borderColor: "black"
  },
  optiontxt:{
    fontSize: 12
  },
  products:{
    // marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  product:{
    width: "40%",
    height: 175,
    margin: 15,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "space-around"
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
  addToShelf:{
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1000,
  }

})

export default Search