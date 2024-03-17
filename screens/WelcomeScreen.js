import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, StyleSheet, PixelRatio, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
            style={{fontWeight:'bold', fontSize:40, textAlign:"center", marginTop:75, color:"white"}}
                className="text-white font-bold text-4xl text-center">
                Diseases Prediction
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/welcome.png")}
                    style={{marginBottom:40,marginTop:30,width: width-10, height:height/2}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    style={{alignItems:"center", borderWidth:1,borderColor:'rgba(240, 204, 22, 0.895)', marginHorizontal:80, borderRadius:5, paddingVertical:10, backgroundColor:'rgba(240, 204, 22, 0.895)', marginBottom:20,fontWeight:"bold"}}
                    className=" bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                            style={{fontWeight:'bold', textAlign:'center', color:'gray',fontSize:16}}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center" style={{display:'flex',flexDirection:'row',alignContent:'center', alignItems:'center',alignSelf:'center', marginBottom:150}}>
                    <Text  style={{color:"white",fontWeight:'400'}}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text style={{color:"yellow",fontWeight:'400'}} className="font-semibold text-yellow-400"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}