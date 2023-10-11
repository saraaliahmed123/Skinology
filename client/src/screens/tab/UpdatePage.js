import {React, useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Card from '../../componenets/Card';
import Button from '../../componenets/Button';
import { useUserContext } from '../../context/UserContext';
import { useRoutineContext } from '../../context/RoutineContext';
import { useShelfContext } from '../../context/ShelfContext';

const UpdatePage = ({navigation}) => {
    const {EditInformation, user, setInformation, information} = useUserContext();
    const {createRoutine, getRoutine, editRoutine} = useRoutineContext();
    const {addToShelf} = useShelfContext()

     const [selected, setSelected] = useState("Skin Type")

     const [skinType, setSkinType] = useState();

     const handleCardSelection = (selectedCard) => {
      let arr = [];
      let bo = false;
      if (skinType) {
          skinType.forEach((item) => {
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
          if (skinType.length === 0) {
              setSkinType([selectedCard]); 
          }
          else {
              setSkinType(arr);
          }
      } else {
        arr.push(selectedCard);
        setSkinType(arr);
      }
  }

    const [skinConcern, setSkinConcern] = useState();

    const handleCardSelection2 = (selectedCard) => {
      let arr = [];
      let bo = false;
      if (skinConcern) {
          skinConcern.forEach((item) => {
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
          if (skinConcern.length === 0) {
              setSkinConcern([selectedCard]); 
          }
          else {
              setSkinConcern(arr);
          }
      } else {
        arr.push(selectedCard);
        setSkinConcern(arr);
      }
  }

  // console.log(skinType)
  // console.log(skinConcern)

  // console.log(information)

  const second = () => {
    if (selected === "Skin Concern")
    {
    return (
      <View style={{marginTop: 10}}>
            <View style={styles.contentView}>
                    <View style={styles.cardView}>
                        <Card img={"Oil Control"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Anti-aging"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Pigmentation"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Acne"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Blackheads"} onSelect={handleCardSelection2} />
                    </View>
                    <View style={styles.cardView}>
                        <Card img={"Hydration"} onSelect={handleCardSelection2} />
                    </View>
                    
                </View>
            <View style={styles.buttonView}>
              {/* <View style={{marginBottom: 20}}>
              <Button text={"Done"} onPress={() => {
                if (skinConcern && skinConcern.length !== 0)
                {
                  setInformation((prev) => {
                    return {...prev, "skinConcern": skinConcern}
                  })
                  

                }
                else
                {
                  alert("Please select a skin concern")
                }
              }}
              sty={"#3D5744"}
              />
              </View> */}
        <Button 
            text={"Save"}
            onPress={async ()=> {
              // if (skinConcern && skinConcern.length !== 0)
              //   {
              //   try{
              //     const hi = await EditInformation(user._id, skinType, skinConcern)
              //     try{    
              //       const here = await createRoutine()
              //       // console.log(here[0])
              //       try{
              //         const sup = await editRoutine(user._id, here)
              //        try{
              //          const routine = await getRoutine(user._id)
              //          await addToShelf(routine.Cleanser)
              //          await addToShelf(routine.Toner)
              //          await addToShelf(routine.Serum)
              //          await addToShelf(routine.Moisturizer)
              //          await addToShelf(routine.Suncream)
              //        }
              //        catch(e){
    
              //        }
              //      }
              //      catch(e){
    
              //      }
              //     }
              //     catch(e){

              //     }
              //   }
              //   catch(e)
              //   {

              //   }
              //   setSelected("Skin Type")
              //   setSkinType()
              //   setSkinConcern()
              //   navigation.navigate("HomeScreen")
              // }
              // else
              // {
              //   alert("Please select a skin concern")
              // }

              console.log(skinConcern)
              if (skinConcern && skinConcern.length !== 0)
                {
                  await setInformation((prev) => {
                    return {...prev, "skinConcern": skinConcern}
                  })
                  try{
                    if (skinConcern && skinConcern.length !== 0 && information.skinConcern)
                    {
                    try{
                      const hi = await EditInformation(user._id, skinType, skinConcern)
                      console.log("here")
                      console.log(hi)
    
    
                      try{    
                        const here = await createRoutine()
                        try{
                          const sup = await editRoutine(user._id, here)
                        try{
                          const routine = await getRoutine(user._id)
                          await addToShelf(routine.Cleanser)
                          await addToShelf(routine.Toner)
                          await addToShelf(routine.Serum)
                          await addToShelf(routine.Moisturizer)
                          await addToShelf(routine.Suncream)
                        }
                        catch(e){
        
                        }
                      }
                      catch(e){
        
                      }
                      }
                      catch(e){
    
                      }
                    }
                    catch(e)
                    {
    
                    }
                    setSelected("Skin Type")
                    setSkinType()
                    setSkinConcern()
                    navigation.navigate("HomeScreen")
                    }
                    else
                  {
                    alert("Please select a skin concern")
                    }
                  }
                  catch(e){

                  }
                }
                else
                {
                  alert("Please select a skin concern")
                }

               

            }}
            sty={"#3D5744"}
        /> 
            </View>
        </View>
    )
          }
  }

  const first = () => {
    if (selected === "Skin Type")
    {
    return(
      <View style={{marginTop: 10}}>
            <View style={styles.contentView}>
                <View style={styles.cardView}>
                    <Card img={"Combination"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Normal"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Sensitive"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Oily"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"Dry"} onSelect={handleCardSelection} />
                </View>
                <View style={styles.cardView}>
                    <Card img={"I don't know"} onSelect={handleCardSelection} />
                </View>
                        
            </View>
            <View style={styles.buttonView}>
                <Button 
                    text={"Next"}
                    onPress={()=> {
                      if (skinType && skinType.length !== 0)
                      {
                        setInformation((prev) => {
                          return {...prev, "skinType": skinType}
                        })
                          setSelected("Skin Concern")
                      }
                      else
                      {
                        alert("Please select a skin type")
                      }
                    }}
                    sty={"#3D5744"}
                /> 
            </View>
        </View>
    )
                  }
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.page}>

          <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.navigate("HomeScreen")}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>


        <View>


          <View style={styles.headingView}>
            <Text style={styles.heading}>Update Information</Text>
          </View>

          <View style={styles.top}>
            <TouchableOpacity style={selected === "Skin Type" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Skin Type")
            }}>
              <Text style={selected === "Skin Type" ? styles.profileButtontxt :styles.profileButtontxtNot}>Skin Type</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selected === "Skin Concern" ? styles.profileButton : styles.profileButtonNot} onPress={()=> {
              setSelected("Skin Concern")
            }}>
              <Text style={selected === "Skin Concern" ? styles.profileButtontxt :styles.profileButtontxtNot} >Skin Concern</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* {selected === "Skin Type" ? */}

        {first()}

        {/* : */}
        
        {second()}


        {/* } */}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page:{
      margin: 50,
      // marginHorizontal: 30,
      alignItems: "center",
    },
    top:{
      flexDirection: "row",
      // marginHorizontal: 40,
      backgroundColor: "#D9D9D9",
      justifyContent: "space-between",
      borderRadius: 20,
      width: 285
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
    },
    buttonView:{
    // position: "absolute",
    // bottom: 0,
    height: 30,
    width: 35,
    marginVertical: "10%",
    marginTop: 20
  },
  button:{
    width: "100%",
    height: "100%",
    backgroundColor: "#3D5744",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  headingView:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentView:{
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    justifyContent: "center",
    // marginTop: 5,
    
    },
    cardView:{
        marginHorizontal: 15
    },
    buttonView:{
        marginTop: "10%"
    },
    back:{
      alignSelf: "flex-start",
      marginRight: 15
    }
})

export default UpdatePage