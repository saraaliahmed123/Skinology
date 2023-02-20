import {React, useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from "@react-navigation/native"
import Card from '../componenets/Card'
import { Dimensions } from 'react-native'
import Button from '../componenets/Button'
import DayReminder from '../componenets/DayReminder'
import { useUserContext } from '../context/UserContext'
import { useRoutineContext } from '../context/RoutineContext'

const ResultsPage = ({navigation}) => {

    const {information} = useUserContext()
    const {createRoutine, routine, setWeekDays} = useRoutineContext()

    useEffect(() => {
        const sub = async () => {
            const hi = await createRoutine();
            // console.log(hi)
        }
        sub()
    }, [])
    
    const [selected, setSelected] = useState();

    if(routine)
    {
        console.log(routine)
    }

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

    ////console.log(days);
    

    // const route = useRoute()
    // const skinType = route.params?.skinType

    // const skinConcern = route.params?.skinConcern

    // const gender = route.params?.gender

    // const age = route.params?.age

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={!selected ? [{height: Dimensions.get('window').height}, styles.page] :styles.page}>
        <View style={styles.skinType}>
            <View style={[styles.cards, {marginTop: 35}]}>
                {information.skinType.map((item, key) => {
                    return(
                        <Card img={item} key={key} resultsPage={true}/>
                    )
                })}
                {/* <Card img={"Hydration"}/>
                <Text style={styles.plus}>+</Text>
                <Card img={"Hydration"}/> */}
            </View>
            <View style={[styles.cards, {marginBottom: 15}]}>
                {
                
                routine ? 
                routine[0].map((item, key) => {
                    return(
                        <Text key={key} style={styles.plus}>{item}</Text>
                    )
                })

                :
                <></>
                
                }

                {/* <Text style={styles.plus}>h</Text>
                <Text style={styles.plus}>h</Text> */}
            </View>
        </View>

        <View>
            <Text style={styles.heading}>Your Routine</Text>

            <ScrollView horizontal={true} style={styles.scroll}>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            selected === "Cleanser" ? setSelected() : setSelected("Cleanser"); 
                        }}
                        
                        >
                            <View style={selected !== "Cleanser" ? styles.imgview : [styles.imgview,styles.imageSelected]}>
                            <Image style={selected !== "Cleanser" ? styles.image : [styles.image,styles.imageSSelected]}
                              source={
                                {
                                 uri: routine ? routine[1]["Cleanser"].image : "http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg",
                               }}
                            />
                            </View>
                            <Text style={styles.txt}>Cleanser</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            selected === "Toner" ? setSelected() : setSelected("Toner"); 
                        }}
                        
                        >
                            <View style={selected !== "Toner" ? styles.imgview : [styles.imgview,styles.imageSelected]}>
                            <Image style={selected !== "Toner" ? styles.image : [styles.image,styles.imageSSelected]}
                               source={
                                {
                                 uri: routine ? routine[1]["Toner"].image : "http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg",
                               }}
                            />
                            </View>
                            <Text style={styles.txt}>Toner</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            selected === "Serum" ? setSelected() : setSelected("Serum"); 
                        }}
                        
                        >
                            <View style={selected !== "Serum" ? styles.imgview : [styles.imgview,styles.imageSelected]}>
                            <Image style={selected !== "Serum" ? styles.image : [styles.image,styles.imageSSelected]}
                              source={
                                {
                                 uri: routine ? routine[1]["Serum"].image : "http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg",
                               }}
                            />
                            </View>
                            <Text style={styles.txt}>Serum</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            selected === "Moisturizer" ? setSelected() : setSelected("Moisturizer"); 
                        }}
                        
                        >
                            <View style={selected !== "Moisturizer" ? styles.imgview : [styles.imgview,styles.imageSelected]}>
                            <Image style={selected !== "Moisturizer" ? styles.image : [styles.image,styles.imageSSelected]}
                               source={
                               {
                                uri: routine ? routine[1]["Moisturizer"].image : "http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg",
                              }}
                            />
                            </View>
                            <Text style={styles.txt}>Moisturizer</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.routine}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => {
                            selected === "Suncream" ? setSelected() : setSelected("Suncream"); 
                        }}
                        
                        >
                            <View style={selected !== "Suncream" ? styles.imgview : [styles.imgview,styles.imageSelected]}>
                            <Image style={selected !== "Suncream" ? styles.image : [styles.image,styles.imageSSelected]}
                               source={
                               {
                                uri: routine ? routine[1]["Suncream"].image : "http://aceplumbers.co.uk/wp-content/uploads/2020/08/create-meme-white-square-white-square-white-background-png-white-background-png-500_492.jpg",
                              }}
                              // source={"https://media.static-allbeauty.com/image/product/1/1600/1186659-murad-spf-environmental-shield-city-skin-age-defense-broad-spectrum-spf50-50ml.jpg"}
                            />
                            </View>
                            <Text style={styles.txt}>Suncream</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
            
            {
            selected && routine ?
            <View> 
                <Text style={styles.heading}>Your Product</Text>
                <View style={styles.itemHeadingView}>
                    <Text style={styles.itemHeadingViewtxt}>{routine[1][selected].name}</Text>
                </View>
                <View style={styles.itemView}>
                    <Image style={styles.productImage}
                        source={{
                            uri: routine[1][selected].image
                        }}
                    />
                </View>
                <View style={styles.skinTypeView}>
                    <Text style={styles.skinTypeHeadingPopup}>SKIN TYPES:</Text>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.cardView}>
                        <Card img={selected === "Serum" ? routine[1][selected].skinConcern : routine[1][selected].skinType} noSelect={true}/>
                    </View>
                </View>
                <View style={styles.skinTypeView}>
                    <Text style={styles.skinTypeHeadingPopup}>INGREDIENTS:</Text>
                </View>
                <View style={styles.ingredients}>
                    <ScrollView>
                        <Text>{routine[1][selected].ingredients}</Text>
                    </ScrollView>
                </View>
            </View>
            :
            <></>
            }

            <View style={styles.week}>
                <DayReminder txt={"Mon"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Tue"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Wed"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Thu"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Fri"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Sat"} onSelect={handleDaySelection}/>
                <DayReminder txt={"Sun"} onSelect={handleDaySelection}/>
            </View>
        
        
        <View style={styles.buttonAndText}>
            <Button 
                text={"SAVE ROUTINE"}
                onPress={() => {
                    if (days)
                    {
                        setWeekDays(days)
                        navigation.navigate("CreateAccount")
                    }
                    else
                    {
                        alert("Select days for your routine")
                    }
                }}
                sty={"#3D5744"}
            />
        </View>

        </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
        //  height: Dimensions.get('window').height,
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
        bottom: "3.5%",
        width: "83%",
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
        marginBottom: "35%",
        marginTop: "10%"
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
        width: "90%",
        height: "90%",
        borderRadius: 7,
        alignSelf: "center",
      },
      imgview:{
        width: "90%",
        height: "92%",
        borderRadius: 7,
        // backgroundColor: "black"
        backgroundColor: "white",
        justifyContent: "center"
        
       // borderWidth:0.5
      },
      imageSelected:{
        // opacity: 0.4,
        borderColor: "#3D5744",
        borderWidth: 4,
        // backgroundColor: "#3D5744",
      },
      txt:{
        textAlign: "center",
        marginTop: 5,
      },
      itemHeadingView:{
        marginHorizontal: 30,
        marginTop: 10,
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
      skinTypeHeadingPopup:{
        marginLeft: 5,
        color: "white",
        fontSize: 13
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
      productImage:{
        width: "80%",
        height: 230,
        marginTop: 10
      },
      ingredients:{
        marginHorizontal: 30,
        marginTop: 25,
      },
      itemHeadingViewtxt:{
        textAlign: "center"
      },
      imageSSelected:{
        opacity: 0.95,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      },

})

export default ResultsPage