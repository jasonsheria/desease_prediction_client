import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FakeActivity from '../data/fakeActivity'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Home_deseas() {

    return (
        <View style={Styles.container}>

            <Image source={require('../assets/images/blood.png')} style={Styles.image} />
            <View style={Styles.panel}>
                <View style={Styles.testbutton}>
                    <View style={{width:"20%", justifyContent:"center", alignItems:'center', alignContent:"center"}}>
                       
                        <TouchableOpacity style={{padding:15,backgroundColor:"rgba(31, 144, 237, 0.872)", borderRadius:30, elevation:10}}>
                            <AntDesign name={"notification"} color={'white'} size={24}/>

                        </TouchableOpacity>

                    </View>
                    <View style={{width:"60%", justifyContent:"center", alignItems:'left', alignContent:"left",paddingHorizontal:10}}>
                       
                        <Text style={{fontSize:15, fontWeight:"bold"}}>
                            Titre panel
                        </Text>
                        <Text style={{opacity:0.4}}>
                            description de la panel
                      
                        </Text>

                    </View>
                    <View style={{width:"20%", justifyContent:"center", alignItems:'center', alignContent:"center"}}>

                    <AntDesign name='caretright' color={'black'} size={24} style={{opacity:0.5}}/>
                    </View>
                </View>
                <Text style={{fontWeight: 'bold', fontSize:15,marginTop:15}}>
                        Suggestion hospital
                </Text>
                <View>
                    <FlatList
                        data={FakeActivity}
                        style={Styles.scrollableList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'column',
                                        paddingHorizontal: 5,
                                        backgroundColor: 'white',
                                        paddingVertical: 5,
                                        marginRight: 15,
                                        elevation: 1,
                                        height: 170,
                                    }}
                                >
                                    <Image source={item.Img} style={{ width: 160, height: 90, borderRadius: 10 / 2 }} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                        <Text style={Styles.mainText}> {item.mainText} </Text>
                                        <Text style={Styles.subText}> {item.adresse} </Text>

                                    </View>

                                    <Text style={{ fontSize: 12, opacity: 0.4 }}>{item.subText}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 8 }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginRight: 12 }}>
                                            <AntDesign name='user' color={'black'} />
                                            <Text style={{ opacity: 0.6, fontSize: 12, marginLeft: 3 }}>2</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginRight: 12 }}>
                                            <AntDesign name='user' color={'black'} />
                                            <Text style={{ opacity: 0.6, fontSize: 12, marginLeft: 3 }}>2</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginRight: 12 }}>
                                            <AntDesign name='home' color={'black'} />
                                            
                                            <Text style={{ opacity: 0.6, fontSize: 12, marginLeft: 3 }}>12km</Text>
                                        </View>

                                    </View>

                                </TouchableOpacity>


                            </>

                        )}
                    />
                </View>
                <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between",alignContent:"space-between",alignItems:"center" }}>

                    <Text style={{fontWeight: 'bold', fontSize:15}}>
                        Training videos
                    </Text>

                    <Text  style={{fontSize:15,opacity:0.5}}>
                        More
                        <AntDesign name='caretright' color={'black'} />
                    </Text>

                </View>
                <View style={Styles.testbutton2}>
                    <View style={{width:"30%"}}>
                      <Image source={require('../assets/images/Doctor-pana.png')} style={{width:"100%",height:"90%"}}/>
                    </View>
                    <View style={{width:"70%",padding:10}}> 

                        <Text>
                            Titre du text
                        </Text>
                        <Text style={{ opacity: 0.6, fontSize: 12, marginLeft: 3 }}>descriptiondescriptiondescriptiondescriptiondescriptiondescription</Text>

                    </View>
                </View>
            </View>

        </View>

    )
}

const Styles = StyleSheet.create({
    panel: {
        minHeight: 600,
        backgroundColor: "white",
        elevation:10

    },
    container: {
        flex: 1,
        marginTop: 0
    },

    image: {
        marginTop: 0,
        width: "100%",
        height: 400,

    },
    panel: {
        marginTop: -110,
        backgroundColor: "white",
        borderRadius: 10,
        height: 600,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingHorizontal: 20,

    },
    testbutton: {

        marginTop: 30,
        
        backgroundColor: "rgba(124, 135, 198, 0.27)",
        height: 85,
        flexDirection:"row",

        borderRadius: 10,


    },
    scrollableList:{
        marginTop:15,
    },
    testbutton2: {

        marginTop: 20,
        flexDirection:"row",
        backgroundColor: "rgba(124, 135, 198, 0.27)",
        height: 100, 
        borderRadius: 10,
        justifyContent:"center",
        alignContent:"space-between",
        alignItems:"center",
        

    },

})