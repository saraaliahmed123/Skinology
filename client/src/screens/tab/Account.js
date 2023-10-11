import {React, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from '../../componenets/InputBox'
import Button from '../../componenets/Button'
import { AntDesign } from '@expo/vector-icons';
import { useUserContext } from '../../context/UserContext'
import { Feather } from '@expo/vector-icons';
import { useRecordContext } from '../../context/RecordContext'
import { useShelfContext } from '../../context/ShelfContext'
import Card from '../../componenets/Card'


const Account = ({navigation}) => {
  const {user, signOut} = useUserContext()
  const {getRecords, records, routine} = useRecordContext()
  const {getShelf, deleteItemInShelf} = useShelfContext()

  const [shelf, setShelf] = useState()

  const [selected, setSelected] = useState("Profile")

  useEffect(() => {
    const sub = async () => {
      await getRecords()
      const items = await getShelf()
      setShelf(items)
    }
    sub()
  }, [])

  const showImages = () => {
      if (records)
      {
        return records.map((item, key) => {
          //console.log(item)
          return(
            <View key={key} style={{margin: 10}}>
              <Text>{new Date(item.date).toDateString()}</Text>
              <Text style={{textAlign: "center"}}>{item.type}</Text>
              {item.images.map((val, key) => {
            // console.log(val)
            return(
              <View style={styles.content} key={key}>
                <Image style={styles.imageView}
                  source={{uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FSkinology-2bf9ffdd-749a-4174-b8a0-c3852a65eacd/Camera/aa2db972-288a-4576-bc64-597df0b4604d.jpg"}}
                />
              </View>
            )
          })}
            </View>
          )
          
      })
      }
  }

  const selectedProfile = () => {
    if (selected === "Profile")
    {
      return(
          <View style={styles.infoView}>
            <View style={styles.info}>
              <Text style={styles.infotxt}>First Name</Text>
              <Text style={styles.input}>{user?.firstName}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Last Name</Text>
              <Text style={styles.input}>{user?.lastName}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Email</Text>
              <Text style={styles.input}>{user?.email}</Text>
            </View>
            <Text style={[styles.infotxt, {marginTop: 20}]}>Skin type</Text>
            <View style={styles.contentView}>
              <View style={[styles.cards, {marginTop: 35, width: "100%"}]}>
                  {user?.skinType.map((item, key) => {
                      return(
                          <Card img={item} key={key} resultsPage={true} account={true}/>
                      )
                  })}
              </View>

              
            </View>

            <Text style={[styles.infotxt, {marginTop: 20}]}>Skin concern</Text>
            <View style={styles.contentView}>
              <View style={[styles.cards, {marginTop: 35}]}>
                  {user?.skinConcern.map((item, key) => {
                      return(
                          <Card img={item} key={key} resultsPage={true} account={true}/>
                      )
                  })}
              </View>

              
            </View>
            
          </View>
      )
    }
  }

  const getItems = () => {
    if (shelf)
    {
      return shelf.items.map((item, key) => {
        return(
          <View style={styles.product} key = {key}>
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
        )
      })
    }
  }

  const selectedShelf = () => {
    if (selected === "Shelf")
    {
      return (
        <View style={styles.products}>
          {getItems()}
      </View>
      )
    }
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.page}>
        {/* <View> */}

          <View style={styles.buttonView}>
              <TouchableOpacity style={[styles.button, {backgroundColor:"#6A3434"}]} 
              
              onPress={ async () => {
               
                try{
                  const sign = await signOut()
                  console.log(sign)
                  if (!sign){
                      navigation.navigate("IndexScreen")
                  }
                
                  
                }
                catch(e){

                }
                
              }}>
                  <Feather name="log-out" size={20} color="white" />
              </TouchableOpacity>
            </View>


          <View style={styles.headingView}>
            <Text style={styles.heading}>Profile</Text>
          </View>

          <View style={styles.top}>
            <TouchableOpacity style={selected === "Profile" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Profile")
            }}>
              <Text style={selected === "Profile" ? styles.profileButtontxt :styles.profileButtontxtNot}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selected === "Shelf" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Shelf")
            }}>
              <Text style={selected === "Shelf" ? styles.profileButtontxt :styles.profileButtontxtNot} >Shelf</Text>
            </TouchableOpacity>
          </View>
        {/* </View> */}


        {selectedProfile()}

        
        {selectedShelf()}

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page:{
    margin: 30,
    // marginHorizontal: 30,
    alignItems: "center",
  },
  top:{
    flexDirection: "row",
    // marginHorizontal: 40,
    backgroundColor: "#D9D9D9",
    justifyContent: "space-between",
    borderRadius: 20,
    width: 250,
    marginBottom: 10
  },
  profileButton:{
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#3D5744",
  },
  profileButtonNot:{
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  profileButtontxt:{
    fontSize: 12,
    color: "white"
  },
  profileButtontxtNot:{
    fontSize: 12,
  },
  heading:{
    // marginBottom: 30,
    textAlign: "center",
    fontSize: 23,
  },
  // heading:{
  //   marginTop: 30,
  //   marginBottom: 20,
  //   textAlign: "center",
  //   fontSize: 20,
  // },
  info:{
    marginVertical: 5
  },
  infoView:{
    width: "100%",
    // height: 300,
    margin: 5,
    // borderWidth: 0.5
  },
  infotxt:{
    marginLeft: "4%",
    marginTop: 5
  },
  // input: {
  //   backgroundColor: "#D9D9D9",
  //   padding: 20,
  //   marginHorizontal: 10,
  //   marginTop: 10,
  //   // borderRadius: 30,
  //   borderRadius: 5,

  //   shadowColor: 'grey',
  //   shadowOffset: { width: 0, height: 10 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 5,  
  //   elevation: 5,
  // },
  input: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 10,
    // borderRadius: 30,
    borderRadius: 5,
    // borderWidth: 0.5,
    // borderColor: "#3D5744",

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5,
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
    width: "40%",
    height: 175,
    marginHorizontal: 15,
    marginVertical: 20
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
  buttonView:{
    // position: "absolute",
    // bottom: 0,
    height: 30,
    width: "100%",
    alignItems: "flex-end",
    // marginBottom: "10%",
    // borderWidth: 0.5
  },
  headingView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 0.5,
    width: "100%",
  },
  button:{
    width: "10%",
    height: "100%",
    backgroundColor: "#3D5744",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  imageView:{
    // borderWidth: 0.5,
    width: "100%",
    height: "100%",
    marginTop: 5
  },
  content:{
    width: 110,
    height: 120,
    marginLeft: 5,
    marginBottom: 10
  },
  contentView:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5,

  },
  cross:{
    alignSelf: "flex-end",
    marginVertical: 5
  },
  itemOpacity:{ 
    backgroundColor: "white", 
    justifyContent: "space-around", 
    overflow: "hidden",
    padding: 10,
    borderRadius: 10,
    height: 170
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
    width: "45%",
    // height: "8%",
    marginHorizontal: 8,
    marginVertical: 20,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
    // borderWidth: 0.5

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
    marginTop: 5,
    marginBottom: 27,
    textAlign: "center",
    fontSize: 23,
  },
  cards:{
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    marginHorizontal: 10,
    justifyContent: "space-evenly"
},
})

export default Account