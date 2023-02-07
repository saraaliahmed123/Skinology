import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from '../../componenets/InputBox'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Search = ({navigation}) => {
  const [search, setSearch] = useState()
  const [option, setOption] = useState("All")

  console.log(option)

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
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons 
            name="ios-search" 
            size={27} 
            color={"black"} 
          />
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={option === "All" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("All")
        }}>
          <Text style={styles.optiontxt}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Cleanser" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("Cleanser")
        }}>
          <Text style={styles.optiontxt}>Cleanser</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Toner" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("Toner")
        }}>
          <Text style={styles.optiontxt}>Toner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Serum" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("Serum")
        }}>
          <Text style={styles.optiontxt}>Serum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Moisturizer" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("Moisturizer")
        }}>
          <Text style={styles.optiontxt}>Moisturizer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={option === "Suncream" ? [styles.option, styles.optionSelect] : styles.option} 
        onPress={()=> {
          setOption("Suncream")
        }}>
          <Text style={styles.optiontxt}>Suncream</Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.products}>
        <TouchableOpacity style={styles.product} onPress={() => {
          navigation.navigate("ProductPage", 
          //{item:item}
          )
        }}>
          <View>
            <TouchableOpacity style={styles.addToShelf} onPress={() => {console.log("jgfiewl")}}>
              <AntDesign name="pluscircleo" size={20} color="black" />
            </TouchableOpacity>
            <Image style={styles.image}
                  source={require('../../componenets/image24.png')}
            />
            <View style={styles.producttxtBox}>
                <Text style={styles.producttxt}>Innisfree - The green tea seed serum</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        


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
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  product:{
    width: "40%",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  image:{
    width: "100%",
    height: 120
  },
  producttxt:{
    textAlign: "center",
    fontSize: 11
  },
  producttxtBox:{
    marginTop: 10,
    marginBottom: 5
  },
  addToShelf:{
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1000,
  }

})

export default Search