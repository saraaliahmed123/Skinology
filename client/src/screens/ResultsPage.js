import {React, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from "@react-navigation/native"
import Card from '../componenets/Card'
import { Dimensions } from 'react-native'
import Button from '../componenets/Button'
import DayReminder from '../componenets/DayReminder'

const ResultsPage = ({navigation}) => {
    const [selected, setSelected] = useState([]);

    const [days, setDays] = useState();

    const handleDaySelection = (selectedCard) => {
        //["Tue"]
        //selected = "Mon"
        let arr = [];
        let bo = false;
        if (days) {
            days.forEach((item) => {
                if (item !== selectedCard) {
                arr.push(item);
                }
                else
                {
                    bo = true;
                }
            });
            if (bo === false) {
                arr.push(selectedCard)
            }
            if (days.length === 0) {
                setDays(selectedCard); 
            }
            else {
            setDays(arr);
            }
        } else {
          arr.push(selectedCard);
          setDays(arr);
        }
    }

    console.log(days);
    

    const route = useRoute()
    const skinType = route.params?.skinType

    const skinConcern = route.params?.skinConcern

    const gender = route.params?.gender

    const age = route.params?.age

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.page}>
        <View style={styles.skinType}>
            <View style={[styles.cards, {marginTop: 35}]}>
                <Card/>
                <Text style={styles.plus}>+</Text>
                <Card/>
            </View>
            <View style={[styles.cards, {marginBottom: 15}]}>
                <Text style={styles.plus}>Oily skin types could be quite struggling 
                    as you may need to deal with acne and 
                    breakout.</Text>
                <Text style={styles.plus}>Normal skin types mean you experience
                    fewer breakouts, have small pores, and 
                    feature a slight shine on the 
                    T-zone after a long day.</Text>
            </View>
        </View>

        <View>
            <Text style={styles.heading}>Your Routine</Text>

            <ScrollView horizontal={true} style={styles.scroll}>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            setSelected("Cleanser"); 
                        }}
                        
                        >
                            <View style={styles.imgview}>
                            <Image style={selected !== "Cleanser" ? styles.image : [styles.image,styles.imageSelected]}
                               // source={images[img]}
                            />
                            </View>
                            <Text style={styles.txt}>Cleanser</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            setSelected("Toner"); 
                        }}
                        
                        >
                            <View style={styles.imgview}>
                            <Image style={selected !== "Toner" ? styles.image : [styles.image,styles.imageSelected]}
                               // source={images[img]}
                            />
                            </View>
                            <Text style={styles.txt}>Toner</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            setSelected("Serum"); 
                        }}
                        
                        >
                            <View style={styles.imgview}>
                            <Image style={selected !== "Serum" ? styles.image : [styles.image,styles.imageSelected]}
                               // source={images[img]}
                            />
                            </View>
                            <Text style={styles.txt}>Serum</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            setSelected("Moisturizer"); 
                        }}
                        
                        >
                            <View style={styles.imgview}>
                            <Image style={selected !== "Moisturizer" ? styles.image : [styles.image,styles.imageSelected]}
                               // source={images[img]}
                            />
                            </View>
                            <Text style={styles.txt}>Moisturizer</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            setSelected("Suncream"); 
                        }}
                        
                        >
                            <View style={styles.imgview}>
                            <Image style={selected !== "Suncream" ? styles.image : [styles.image,styles.imageSelected]}
                               // source={images[img]}
                            />
                            </View>
                            <Text style={styles.txt}>Suncream</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>

            <View>

            </View>

            <View style={styles.week}>
                <DayReminder txt={"Mon"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Tue"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Wed"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Thu"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Fri"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Sat"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Sun"} onSelect={handleDaySelection}/>
            </View>
        </View>
        
        <View style={styles.buttonAndText}>
            <Button 
                text={"SAVE ROUTINE"}
                onPress={() => {navigation.navigate("CreateAccount")}}
                sty={"#3D5744"}
            />
        </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
         height: Dimensions.get('window').height,
        flexDirection: "column",
       //  justifyContent: "space-between",
        backgroundColor: "#ECECEE",
    },
    skinType:{
        // height: 350,
        backgroundColor: "#3D5744",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    cards:{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "space-evenly"
    },
    plus:{
        color: "white",
        fontSize: 15,
        textAlign: "center",
        marginVertical: 7
    },
    buttonAndText:{
        marginHorizontal: 30,
        justifyContent: "center",
        // borderWidth: 0.5,
        position: "absolute",
        bottom: "5%",
        width: "83%"
    },
    routine:{
         height: 150
    },
    scroll: {
        marginHorizontal: 10
    },
    heading:{
        marginTop: 20,
        textAlign: "center",
        fontSize: 20
    },
    week:{
        flexDirection: "row",
        // borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    card: {
        width: 100,
        height: 90,
        // marginHorizontal: 25,
        marginRight: 5,
         marginTop: 35,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth:0.5
      },
      image:{
        width: "100%",
        height: "100%",
        borderRadius: 7,
        alignSelf: "center",
        opacity: 0.9,
      },
      imgview:{
        width: "90%",
        height: "92%",
        borderRadius: 7,
        // backgroundColor: "black"
        backgroundColor: "white",
        
       // borderWidth:0.5
      },
      imageSelected:{
        // opacity: 0.4,
        borderColor: "#3D5744",
        borderWidth: 4,
        backgroundColor: "#3D5744",
      },
      txt:{
        textAlign: "center",
        marginTop: 5,
      }

})

export default ResultsPage