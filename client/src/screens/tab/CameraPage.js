import {React, useState, useContext, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Button from '../../componenets/Button';
import {Camera, CameraType } from 'expo-camera';
import { useRecordContext } from '../../context/RecordContext';



const CameraPage = ({navigation, route}) => {

  const { day } = route.params
  // console.log(day)

  const {images, setImages, todaysRecords} = useRecordContext()

  const [hasPermission, setHasPermission] = useState(null);

  const [cameraState, setCameraState] = useState(false)

  const [type, setType] = useState(CameraType.front);


    const getPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getPermission();
        // console.log(images)
    }, [images]);

  let camera;
  const getPicture = async () => {
      // if (camera) {
          const photo = await camera.takePictureAsync();
          // setPicture(photo);
          if (images)
          {
            setImages((prev) => {
              return [...prev, photo.uri];
          })
          }
          else{
            setImages([photo.uri])
          }
          
          
           setCameraState(false)
          //  console.log(photo.uri);
      // }
  }

  const showImages = () => {
    if (images)
    {
     // console.log(images)
      if (todaysRecords)
      {
        // console.log(todaysRecords)
        // console.log(todaysRecords.length)
        if (todaysRecords.length < 1 && day === "morning")
        {
          return images.map((item, key) => {
            return(
              <View style={styles.content} key={key}>
              <TouchableOpacity style={styles.cross} onPress={() => {
                    setImages((prev) => {
                      return prev.filter(value => value !== item)
                    })
                  }}>
                  <Feather name="x" size={24} color="#3D5744" />
              </TouchableOpacity>
              <View style={styles.imageView}>
                <Image style={{width: "100%", height: "100%"}}
                  source={{uri: item}}
                />
              </View>
            </View>
            )
          })
        }
        else if (todaysRecords.length >= 1 && day === "night")
        {
          return images.map((item, key) => {
            return(
              <View style={styles.content} key={key}>
              <TouchableOpacity style={styles.cross} onPress={() => {
                    setImages((prev) => {
                      return prev.filter(value => value !== item)
                    })
                  }}>
                  <Feather name="x" size={24} color="#3D5744" />
              </TouchableOpacity>
              <View style={styles.imageView}>
                <Image style={{width: "100%", height: "100%"}}
                  source={{uri: item}}
                />
              </View>
            </View>
            )
          })
        }
      }
      else
      {
        if (day === "morning")
        {
          return images.map((item, key) => {
            return(
              <View style={styles.content} key={key}>
              <TouchableOpacity style={styles.cross} onPress={() => {
                    setImages((prev) => {
                      return prev.filter(value => value !== item)
                    })
                  }}>
                  <Feather name="x" size={24} color="#3D5744" />
              </TouchableOpacity>
              <View style={styles.imageView}>
                <Image style={{width: "100%", height: "100%"}}
                  source={{uri: item}}
                />
              </View>
            </View>
            )
          })
        }
      }
    }
  }

  return (
    <SafeAreaView>
    <View style={styles.page}>
          <View style={styles.top}>
            <TouchableOpacity
            style={styles.back}
            onPress={() => {navigation.goBack()}}
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.itemHeadingView}>
              <Text style={styles.heading}>Pictures</Text>
            </View>

            {cameraState 
            
            ?
              <View>
             <Camera style={styles.subContainer} ref={(ref) => {camera = ref}} type={type}> 
                <View></View>
             </Camera>
             <Button 
                onPress={() => {getPicture()}}
                text={"TAKE"}
                sty={"#3D5744"}
              />
             </View>
            :

            <View>
            <View style={styles.contentView}>
              {showImages()}
             
            </View>

          <View style={styles.buttonView}>
          <Button 
            onPress={() => {setCameraState(true)}}
            text={"TAKE A PICTURE"}
            sty={"#3D5744"}
          />
          </View>
          </View>
            
            }


          </View>
        
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    top:{
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: "row",
        height: 30,
        // borderBottomWidth: 0.5
      },
      page:{
        margin: 10,
        justifyContent: "center",
      },
      itemHeadingView:{
        marginHorizontal: 30,
        alignItems: "center"
      },
      heading:{
        fontSize: 20
      },
      contentView:{
        margin: 30,
        flexDirection: "row",
        flexWrap: "wrap"
      },
      content:{
        width: 110,
        height: 130,
        margin:15
      },
      imageView:{
        // borderWidth: 0.5,
        width: "90%",
        height: "80%"
      },
      cross:{
        alignSelf: "flex-end",
        marginVertical: 5
      },
      buttonView:{
        width: "80%",
        alignSelf: "center"
      },
      subContainer:{
        backgroundColor: "transparent",
        height: 450,
        margin: 10
    },
})

export default CameraPage