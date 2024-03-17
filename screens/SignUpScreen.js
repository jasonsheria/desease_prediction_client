import { View, Text, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: "rgba(31, 144, 237, 0.872)" }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }} className="flex-row justify-center">
                    <Image source={require('../assets/images/signup.png')}
                        style={{ width: 300, height: height / 4 }} />
                </View>
            </SafeAreaView>
            <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor:"white",marginTop:30,paddingTop:40,paddingLeft:10}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
          <Text style={{marginLeft:40,marginBottom:10,fontWeight:"bold",fontSize:16}} className="text-gray-700 ml-4">Full Name</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="John peter"
              value="John peter" 
              style={{marginHorizontal:20,paddingVertical:15,paddingLeft:8,borderRadius:10,backgroundColor:'rgb(211, 209, 209)'     }}
            />
            <Text style={{marginLeft:40,marginBottom:10,fontWeight:"bold",fontSize:16}} className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="email"
              value="john@gmail.com" 
              style={{marginHorizontal:20,paddingVertical:15,paddingLeft:8,borderRadius:10,backgroundColor:'rgb(211, 209, 209)'     }}
            />
            <Text 
            style={{marginLeft:40,marginBottom:10,fontWeight:"bold",fontSize:16,marginTop:10}}
            className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value="test12345" 
              style={{marginHorizontal:20,paddingVertical:15,paddingLeft:8,borderRadius:10,backgroundColor:'rgb(211, 209, 209)'     }}

            />
         
            
             <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    style={{borderRadius:10,alignItems:"center", borderWidth:1,borderColor:'orange', marginHorizontal:20, paddingVertical:10, backgroundColor:'orange', marginBottom:20,marginTop:20,fontWeight:'bold'}}
                    className=" bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                            style={{fontWeight:'bold', textAlign:'center', color:'black',fontSize:16}}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
            
          </View>
          <Text style={{alignContent:'center',textAlign:'center',fontSize:20}}>Or</Text>
          <View className="flex-row justify-center space-x-12" style={{display:'flex',flexDirection:'row',alignContent:'space-between',alignItems:'center',alignSelf:'flex-start',marginTop:10}}>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
            style={{marginHorizontal:65}}
            >
              <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
            style={{marginRight:65}}
            >
              <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:40}}>
              <Text className="text-gray-500 font-semibold"
              style={{color:"gray",fontWeight:"bold"}}>
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                  <Text className="font-semibold text-yellow-500"
                  style={{color:"rgba(240, 204, 22, 0.895)",fontWeight:"bold"}}
                  > Sign In</Text>
              </TouchableOpacity>
          </View>
          
      </View>
        </View>
    )
}
