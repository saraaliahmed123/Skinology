import {React, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputBox from '../../componenets/InputBox'
import Button from '../../componenets/Button'
import { AntDesign } from '@expo/vector-icons';

const Account = ({navigation}) => {
  const [selected, setSelected] = useState("Profile")
  return (
    <SafeAreaView>
    <View style={styles.page}>
        <View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Profile</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={()=> {
                navigation.navigate("UpdatePage")
              }}>
                  <AntDesign name="edit" size={20} color="white" />
              </TouchableOpacity>
            </View>
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
        </View>
        {selected === "Profile"
        ?

          <View style={styles.infoView}>
            <View style={styles.info}>
              <Text style={styles.infotxt}>First Name</Text>
              <Text style={styles.input}>Sara</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Last Name</Text>
              <Text style={styles.input}>Sara</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Email</Text>
              <Text style={styles.input}>Sara</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Password</Text>
              <Text style={styles.input}>Sara</Text>
            </View>
          </View>

        :

        <View style={styles.products}>
        <TouchableOpacity style={styles.product} onPress={() => {
          navigation.navigate("ProductPage", 
          //{item:item}
          )
        }}>
          <View>
            <Image style={styles.image}
                  source={require('../../componenets/image24.png')}
            />
            <View style={styles.producttxtBox}>
                <Text style={styles.producttxt}>Innisfree - The green tea seed serum</Text>
            </View>
          </View>
        </TouchableOpacity>
        


      </View>
        
        }

    </View>
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
    width: 250
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
    marginBottom: 30,
    textAlign: "center",
    fontSize: 20,
    marginRight: "20%"
  },
  info:{
    marginVertical: 5
  },
  infoView:{
    width: "100%",
    margin: 20
  },
  infotxt:{
    marginLeft: "4%",
    marginTop: 5
  },
  input: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 10,
    // borderRadius: 30,
    borderRadius: 5,

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5,
  },
  products:{
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "100%"
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
    height: 100
  },
  producttxt:{
    textAlign: "center",
    fontSize: 11
  },
  producttxtBox:{
    marginTop: 10,
    marginBottom: 5
  },
  buttonView:{
    // position: "absolute",
    // bottom: 0,
    height: 30,
    width: 35,
    marginBottom: "10%"
  },
  headingView:{
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button:{
    width: "100%",
    height: "100%",
    backgroundColor: "#3D5744",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Account