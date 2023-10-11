import {React, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useShelfContext } from '../../context/ShelfContext'
import { useRecordContext } from '../../context/RecordContext'
import { eachWeekOfInterval, subDays, addDays, eachDayOfInterval, format } from 'date-fns';
import PagerView from 'react-native-pager-view';

const ShelfPage = ({navigation}) => {

    const {getRecords, records} = useRecordContext()

    const [day, setDay] = useState(new Date())

    useEffect(() => {
        const sub = async () => {
          await getRecords()
        }
        sub()
      }, [])

      const dates = eachWeekOfInterval(
        {
        start:  subDays(new Date(), 7),
        end: addDays(new Date(), 7)
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
      const time = format(new Date(), 'a')
      console.log(time)
    

    const showImages = () => {
        if (records)
        {
          return records.map((item, key) => {
            console.log(day.toDateString())
            console.log(new Date(item.date).toDateString())
            if (day.toDateString() === new Date(item.date).toDateString()) {
            return(
              <View key={key} style={styles.record}>
                <View style={styles.recordtext}>
                    <Text>{new Date(item.date).toDateString()}</Text>
                    <Text style={{textAlign: "center", color: "#3D5744", fontWeight: "bold"}}>{item.type}</Text>
                </View>

                <View style={styles.imagelist}>
                {item.images.map((val, key) => {
                    console.log(val)
                    return(
                        <View style={styles.content} key={key}>
                        <Image style={styles.imageView}
                            source={{uri: val}}
                        />
                        </View>
                    )
                })}
                </View>
              </View>
            )
              }
            
        })
        }
    }


    const displayCalendar = () => {
      return (
      <View style={styles.calendar}>
        <PagerView initialPage={1} >
        {
        dates.map((week, i) => {
          return (
            <View key={i} collapsable={false}>
              <View style={styles.row}>
                {week.map((day, key) => {
                  const txt = format(day, 'EEE')
                  let exist;
                  return(
                    <View key={key} style={styles.day}>
                      <TouchableOpacity style={{alignItems: "center"}}
                        onPress={() => {
                          setDay(day)
                        }}
                      >
                      <Text style={day.toDateString() === new Date().toDateString() ? {color: "black", fontWeight: "bold"} : {color: "grey"}} >{txt}</Text>
                      <View style={day.toDateString() === new Date().toDateString() ? styles.selected : styles.notSelected} >
                        <Text style={day.toDateString() === new Date().toDateString() ? {color: "white"} : {color: "black"}}>{day.getDate()}</Text>
                      </View>
  
                      {/* <View style={{flexDirection: "row"}}>
                        {
                          exist ?
                          exist.map((item, key) => {
                            return(
                              <View key={key}style={{width: 6, height: 6, borderRadius: 3 ,backgroundColor: "#993F3F", margin: 1.5, marginTop: 7}}></View>
                            )
                          })
                          :
                          <></>
                          
                        } */}
          
                        {/* </View> */}
                        
                        </TouchableOpacity>
  
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


  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.page}>
                <Text style={styles.heading}>Progress</Text>
                {/* <View style={styles.products}> */}

                <View style={styles.calendarArrow}>
                  {displayCalendar()}
                </View>

                    {showImages()}
                {/* </View> */}
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
    content:{
        width: 95,
        height: 100,
        // borderWidth: 0.5
        // marginLeft: 5,
        // marginBottom: 10
      },
    imageView:{
        // borderWidth: 0.5,
        width: "90%",
        height: "90%",
        marginTop: 5,
        borderRadius: 5,
    },
    heading:{
        marginTop: 5,
        marginBottom: 27,
        textAlign: "center",
        fontSize: 23,
      },
    record:{
        flexDirection: "row",
        width: "100%",
        marginVertical: 15,
        padding: 10,

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: "white",

        borderRadius: 5,
    },
    products:{
        // marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 30,
        width: "100%",
      },
      recordtext:{
        justifyContent: "center",
        marginRight: 10
      },
      imagelist:{
        flexDirection: "row",
        // borderWidth: 0.5,
        width: "70%",
        flexWrap: "wrap",
        
        // borderWidth: 0.5

      },
      calendar:{
        width: 550,
      },
      row:{
        flexDirection: "row",
        justifyContent: "space-around"
      },
      day:{
        alignItems: "center",
        // marginHorizontal: 10,
        // marginTop: 10,
        // marginBottom: 6,
        backgroundColor: "white",
        padding: 13,
        margin: 15,
        borderRadius: 10,
        // borderWidth:0.5
      },
      selected:{
        padding: 5,
        // margin: 5,
        height: 40,
        width: 40,
        // borderRadius: 40/2,
         borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#3D5744",
    
        backgroundColor: "#3D5744",
        marginTop: 5
      },
      notSelected:{
        // margin: 5,
        marginTop: 5,
        height: 40,
        width: 40,
        // borderRadius: 40/2,
        justifyContent: "center",
        alignItems: "center",
      },


})

export default ShelfPage
