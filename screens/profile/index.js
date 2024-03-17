import { View, Text, Image, ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Styles from './styles'
import { TextInput } from 'react-native-paper'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { launchImageLibrary, launchCamera } from 'expo-image-picker'
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from 'react-native'

const Profile = ({ navigation }) => {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState('')
  const [share, setShare] = useState(false)
  const [imageurl, setImageurl]=useState(false);
  
  function handleEdit() {
    edit ? setEdit(false) : setEdit(true)
  }
    const [fileData, setFileData] = useState(null);
    const [fileUri, setFileUri] = useState(null);
    const openShare = ()=>{
      setShare(!share);
      return 100
    }
    const renderFileData = () => {
      if (fileData) {
        console.log(fileUri)
        return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
          style={Styles.images}
        />
      }
       else {
        return <Image source={require('../../assets/images/81733495_1463260033849727_7934281484641239040_o.jpg')}
          style={Styles.images}
        />
      }
    }
  
  
    const renderFileUri = () => {
      if (fileUri) {
        setImageurl(true);
        console.log(fileUri)
        return <Image
          source={{ uri: fileUri }}
          style={Styles.images}
        />
      } else{
        setImageurl(false)
      }
    }
  
  
   
  
    const launchNativeImageLibrary = () => {
      // console.log('click')
      let options = {
        includeBase64: true,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary( 'photo', (response) => {

          if (!response.didCancel && !response.error) {
        

              let source = {uri: `data:image/jpeg;base64,${response.data}`, isStatic: true};
        
              if (Platform.OS === 'ios') {
                  source = {
                      ...source,
                      path: response.uri.replace('file://', ''),
                      assetURL: response.origURL,
                      width: response.width,
                      height: response.height
                  };
              } else {
                  source = {
                      ...source,
                      path: response.path,
                      width: response.width,
                      height: response.height
               }
          }
      }
  
    })
  }
  return (
    <View styles={{ flex: 1 }}>
      <View style={Styles.title}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}

        >

          <AntDesign name="arrowleft" color={'rgb(25, 125, 213)'} size={25} style={{ paddingTop: 2 }} />
        </TouchableOpacity>
        <Text style={{ color: 'rgb(25, 125, 213)', fontSize: 20, marginLeft: 70 }}> Profile Detail </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft:75}}
        >

          <MaterialCommunityIcons name="pencil" color={'rgb(25, 125, 213)'} size={25} style={{ paddingTop: 2 }} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 25, marginHorizontal: 15, backgroundColor: '#aecad4de', borderRadius: 10, padding: 10 }}>
        <Pressable
        onPress={launchNativeImageLibrary}>
        {/* { image && renderFileUri()} */}
         {!imageurl ? <Image source={require('../../assets/images/Doctor-pana.png')}
          style={Styles.images}
        /> : renderFileUri() }

        </Pressable>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>
            Full name </Text>
          <Text
            style={{ color: 'rgb(25, 125, 213)' }}>
            gender</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'rgba(31, 144, 237, 0.872)', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginTop: 15, marginHorizontal: 15, borderRadius: 10, padding: 10 }}>
        <View >
        
          <Text style={{ fontWeight: 'bold', color: 'white' }}> Partager Votre </Text>
        
          <Text style={{ fontWeight: 'bold', color: 'white' }}> Profile medicale </Text>

        </View>
        <TouchableOpacity
          onPress={openShare} style={{ backgroundColor: 'orange', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
        
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Partager Profile
          </Text>
        </TouchableOpacity>
       
      </View>
      <View style={{backgroundColor: 'green', height : share? openShare : 0}}>

</View>
      <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
        <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 17 }}>
          Details Patient
        </Text>
        <View style={{ marginBottom: 15 }}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Nom
            </Text>
            <Text>
              SHERIA GACHABA Jason
            </Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text>
              Adresse
            </Text>
            <View>
              <Text>  Kinshasa, C/ Lemba, </Text>
              <Text>  Q/ Plateau Maison J, N°64</Text>
            </View>
          </View>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Date Naissance
            </Text>
            <Text>
              17/12/1996
            </Text>

          </View>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              weight
            </Text>
            <Text>
              6kg
            </Text>

          </View>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              length
            </Text>
            <Text>
              1,7 inch
            </Text>

          </View>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Alergie
            </Text>
            <Text>
              aucun
            </Text>

          </View>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Proffesion
            </Text>
            <Text>
              Ir Dev & Logiciel
            </Text>

          </View>
          <View style={{ marginBottom: 15, flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 17 }}>
              Hopitale Inscrit
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}> HJ Hospital</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}> 50 Naire </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}> MAMAN Yemo</Text>
              </TouchableOpacity >
              <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}> Hopt Gombe</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}>  Accram </Text>
              </TouchableOpacity>
            </ScrollView>

          </View>
        </View>
      </View>

    </View>

  )
}

export default Profile