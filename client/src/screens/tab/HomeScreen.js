import {React, useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { eachWeekOfInterval, subDays, addDays, eachDayOfInterval, format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import PagerView from 'react-native-pager-view';
import Card from '../../componenets/Card'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../componenets/Button'
import { AntDesign } from '@expo/vector-icons';

const dates = eachWeekOfInterval(
  {
  start:  subDays(new Date(), 7),
  end: addDays(new Date(), 14)
  },
  {
    weekStartsOn: 1,
  }
).reduce((acc, cur) => {

  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6)
  })

  acc.push(allDays)

  return acc;

}, [])

const month = format(new Date(), 'MMMM')
const year = format(new Date(), 'uu')

const HomeScreen = ({navigation}) => {

  const [selected, setSelected] = useState([]);

    const handleCardSelection = (selectedCard) => {
        setSelected([...selected, selectedCard]);
    }

  const displayCalendar = () => {
    return (
    <View style={styles.calendar}>
    <PagerView  initialPage={1}>
      {
      dates.map((week, i) => {
        return (
          <View key={i} >
            <View style={styles.row}>
              {week.map((day, key) => {
                const txt = format(day, 'EEE')
                return(
                  <View key={key} style={styles.day}>
                    <Text style={day.toDateString() === new Date().toDateString() ? {color: "black", fontWeight: "bold"} : {color: "grey"}} >{txt}</Text>
                    <View style={day.toDateString() === new Date().toDateString() ? styles.selected : styles.notSelected} >
                      <Text style={day.toDateString() === new Date().toDateString() ? {color: "white"} : {color: "black"}}>{day.getDate()}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        )
      })
      }
    </PagerView >
    </View>
  );
  }

  const displayMonringRoutine = () => {
    return(
      <View>
      <View style={styles.morningRoutineView}>
        <View style={styles.morningHeaderView}>
          <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={()=> {
                navigation.navigate("Camera")
              }}>
                <AntDesign name="camerao" size={20} color="white" />
              </TouchableOpacity>
            </View>
          <View style={styles.morningRoutineHeader}>
            <Feather name="sun" size={20} color="#3D5744"  style={{marginRight: 10}}/>
            <Text style={styles.morningRoutineHeadertxt}>Routine</Text>
          </View>
        </View>
        {/* <Text>To-dos:</Text> */}
        <ScrollView horizontal={true} style={styles.scroll}>
            <View style={styles.routine}>
                <Card img={"Cleanser"} onSelect={handleCardSelection}/>
            </View>
            <View style={styles.routine}>
                <Card img={"Toner"} onSelect={handleCardSelection}/>
            </View>
            <View style={styles.routine}>
                <Card img={"Serum"} onSelect={handleCardSelection}/>
            </View>
            <View style={styles.routine}>
                <Card img={"Moisturizer"} onSelect={handleCardSelection}/>
            </View>
            <View style={styles.routine}>
                <Card img={"Sun Cream"} onSelect={handleCardSelection}/>
            </View>
            </ScrollView>
      </View>
      <View style={styles.routineButtonView}>
            <Button 
              text={"COMPLETE ROUTINE"}
              //onPress={() => {navigation.navigate("Main")}}
              sty={"white"}
              line={"#3D5744"}
              home={"#3D5744"}
            />
        </View>
      </View>
    )
  }

  const displayNightRoutine = () => {
    return (
      <View>
        <View style={styles.morningRoutineView}>
          <View style={styles.morningHeaderView}>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={()=> {
                navigation.navigate("Camera")
              }}>
                <AntDesign name="camerao" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.morningRoutineHeader}>
              <MaterialCommunityIcons name="weather-night" size={20} color="#3D5744" style={{marginRight: 10}}/>
              <Text style={styles.morningRoutineHeadertxt}>Routine</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={styles.scroll}>
              <View style={styles.routine}>
                  <Card img={"Cleanser"} onSelect={handleCardSelection}/>
              </View>
              <View style={styles.routine}>
                  <Card img={"Toner"} onSelect={handleCardSelection}/>
              </View>
              <View style={styles.routine}>
                  <Card img={"Serum"} onSelect={handleCardSelection}/>
              </View>
              <View style={styles.routine}>
                  <Card img={"Moisturizer"} onSelect={handleCardSelection}/>
              </View>
              <View style={styles.routine}>
                  <Card img={"Sun Cream"} onSelect={handleCardSelection}/>
              </View>
              </ScrollView>
        </View>
        <View style={styles.routineButtonView}>
            <Button 
              text={"COMPLETED ROUTINE"}
              //onPress={() => {navigation.navigate("Main")}}
              sty={"white"}
              line={"#3D5744"}
              home={"#3D5744"}
            />
        </View>
      </View>
    )
    }

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.page}>
        <View style={styles.top}>
          <Text style={styles.topDate}>{new Date().toDateString()}</Text>
          <View style={styles.topExtra}>
            <View style={styles.headingView}>
              <Text style={styles.heading}>Good morning,</Text> 
              <Text style={[styles.heading, {fontWeight: "bold"}]}>Sara</Text> 
            </View>
            <View style={styles.imageView}>
              <Image style={styles.image}
                    source={require('../../componenets/eye-shadow.png')}
              /> 
            </View>
           </View>
        </View>

      <View style={styles.calendarArrow}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{alignSelf: "center", width: 18}}/>
        {displayCalendar()}
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" style={{alignSelf: "center", width: 32}}/>
      </View>

        <View style={styles.routineBox}>
        {displayMonringRoutine()}
        </View>
        <View style={styles.routineBox}>
        {displayNightRoutine()}
        </View>


        <View style={styles.skinLog}>
            <Image style={styles.imageSkin}
                  source={require('../../componenets/skinfeeling.jpg')}
            /> 
              <View style={styles.skinLogContent}>
                  <Text style={styles.skinDailyLog}>Skin Daily Log</Text>
                  <Text style={styles.question}>How is your skin feedling today?</Text>
                  <View style={styles.emotions}>
                    <TouchableOpacity style={styles.emotion}>
                      <Text>Awesome</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emotion}>
                      <Text>Good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emotion}>
                      <Text>Okay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emotion}>
                      <Text>Not so good</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emotion}>
                      <Text>Awful</Text>
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
  page:{
    // margin: 30,
    //marginTop: 35,
    justifyContent: "space-around",
    backgroundColor: "#ECECEE"
  },
  top:{
    flexDirection: "column",
    justifyContent: "space-between",
    // margin: 30,
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom:25,
  },
  topExtra:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading:{
    fontSize: 20,
  },
  image:{
    width: 60,
    height: 60,
  },
  imageView:{
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 50
  },
  skinLog:{
    borderRadius: 15,
    height: 260,
    alignItems: "center",
    overflow: "hidden",
    //marginTop: 25,
    margin: 30,
    marginTop:35,
    marginBottom: 45,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 8,
  },
  imageSkin: {
    borderTopRadius: 10,
    width: "100%",
    height: 120,
    position: "absolute",
    opacity: 0.9
  },
  skinLogContent:{
    // position: "absolute",
    backgroundColor: "white",
    // bottom: 10,
    width: 380,
    height: 200,
    borderRadius: 500 /2,
    marginTop: 90,
    paddingHorizontal: 40,
    paddingTop: 10,
    alignItems: "center",    
  },
  emotions:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 5
  },
  emotion:{
    borderWidth: 0.5,
    border: 5,
    margin: 5,
    padding: 7,
    borderRadius: 10,
    borderColor: "#3D5744"
  },
  skinDailyLog:{
    marginTop: 2,
    fontSize: 12,
    color: "#3D5744"
  },
  question:{
    margin: 3,
  },
  row:{
    flexDirection: "row",
    justifyContent: "space-around"
  },
  day:{
    alignItems: "center",
    margin: 10,
    // borderWidth:0.5
  },
  calendar:{
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 5,
    //borderWidth: 0.5,
    // marginTop: 15,
    width: "80%",
    padding: 5,
    // paddingHorizontal: 5,
    // marginHorizontal: 30,
    // borderWidth: 0.5,

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    elevation: 5,
  },
  calendarArrow:{
    // borderWidth: 0.5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginLeft: 10,
    
    // justifyContent: "center",
    // alignContent: "center"
  },
  headingCalendar:{
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  selected:{
    padding: 5,
    // margin: 5,
    height: 40,
    width: 40,
    borderRadius: 40/2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#3D5744",

    backgroundColor: "#3D5744",
  },
  notSelected:{
    // margin: 5,
    height: 40,
    width: 40,
    // borderRadius: 40/2,
    justifyContent: "center",
    alignItems: "center",
  },
  morningRoutine:{
    borderWidth: 0.5
  },
  morningRoutineHeader:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  routine:{
    height: 150
  },
  scroll: {
    // marginRight: 10,
    //  borderWidth: 0.5,
    //  borderRadius: 5,
    // backgroundColor: "white",
    //  borderRadius: 5,

    //  shadowColor: '#000',
    //  shadowOffset: { width: 0, height: 10 },
    //  shadowOpacity: 0.5,
    //  shadowRadius: 5,  
    //  elevation: 8,
  },
  routineBox:{
    // borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "#ECECEE",
    marginVertical: 15,
    marginHorizontal: 15,
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#CBC9C9"

    //  shadowColor: '#000',
    //  shadowOffset: { width: 0, height: 10 },
    //  shadowOpacity: 0.5,
    //  shadowRadius: 5,  
    //  elevation: 8,
  },
  morningRoutineHeadertxt:{
    // marginTop: 20,
    // textAlign: "center",
    fontSize: 18
  },
  morningRoutineView:{
    
    
    
    // borderWidth: 0.5,
  },
  routineButtonView:{
    // borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 15,
  },
  topDate:{
    color: "grey",
    fontSize: 11
  },
  morningHeaderView:{
    flexDirection: "row",
    // justifyContent: "center"
  },
  buttonView:{
    // position: "absolute",
    // bottom: 0,
    height: 30,
    width: 35,
    // marginBottom: "5%",
    // marginTop: "9%",
    marginVertical: "3%",
    marginRight: "20%",
    marginLeft: "3%"
    
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

export default HomeScreen