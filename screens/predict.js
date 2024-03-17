import { View, Text, StyleSheet, FlatList,TouchableOpacity,Modal, Button  } from 'react-native'
import React, {useState,useEffect} from 'react'
import { TextInput } from 'react-native-paper'
import SearchBar from './search'
import data from '../data/deseases'
export default function Predict() {
  
  const  [datas, setDatas] =useState(data)
  const [tasks, setTasks] = useState([])
  const [searchPhrase,setSearchPhrase]=useState("");
  const [numb, setNumb]=useState(0)
  const [clicked, setCLicked]=useState(false)
  const [isVisible,setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!isVisible);
  const filterElementsByCharacter = (arr, char) => {
    const filteredElements = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i].name;
      // console.log(element)
      for (let j = 0; j < element.length; j++) {
        let s = char.length;


        if (element[j] === char[0]) {
            let res= element.substring(j,j+s)
            if(res==char){

              filteredElements.push({"name":element});
         

            }
            
            break;

        }
      }

    }
    return filteredElements;
  }
  function getText(){
    setDatas(data)
    const filteredElements = filterElementsByCharacter(datas, searchPhrase);
    setDatas(filteredElements)
    if(searchPhrase=="" || searchPhrase.trim()==""){
      setDatas(data)
    }
    // setDatas(filterElementsByCharacter);

  }
  function AddDeseas(item){
    const itensCopy = Array.from(tasks)
    itensCopy.push({"name":item})
    setTasks(itensCopy)
    setNumb(tasks.length+1)
   
    
  }
  function handleSendDeseases(){

    console.log(tasks)
    toggleVisibility();
    
  }
  function climText(){
    setDatas(data);
   
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={isVisible} animationType="fade" transparent={true}>
    <View style={Styles.modalView}>
        <View style={Styles.alert}>
          <Text style={Styles.alertTitle}>Attention!</Text>
          <Text style={Styles.alertMessage}>Based on the symptoms provided , we suspect.</Text>
          <View style={Styles.alertButtonGroup}>
            <View style={Styles.alertButton2}>
                <Button title="suggest" style={{backgroundColor:"orange"}} onPress={() => toggleVisibility()} />
            </View>
            <View style={Styles.alertButton}>
                <Button title="cancel" onPress={() => toggleVisibility()} />
            </View>
          </View>
        </View>
    </View>
</Modal>
      <View style={Styles.header}>
        <Text style={{ color: "white", fontSize: 26 }} >How do you feel?</Text>
        <Text style={{ color: "white", fontSize: 16 }}>add the symptoms you experience</Text>
        <SearchBar climText={climText} getText={getText} clicked={clicked}  setCLicked={setCLicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignContent:"flex-start", alignItems:"center"}}>
            <Text style={{ color: "red", fontSize: 16 }}>{numb}</Text>
            <Text style={{ color: "white", fontSize: 16, marginLeft:5 }}>was added</Text>

        </View>
      </View>
      <View style={{paddingBottom:5, height:520}}>
        <FlatList
          data={datas}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
             
              style={{ backgroundColor: 'white', marginVertical:10 , elevation: 2, marginHorizontal: 10,}}>
              <View style={{ flexDirection: 'row', padding: 10, justifyContent:"space-between", alignItems:"center"}}>
                
                <Text> {item.name}</Text>
                <TouchableOpacity 
                onPress={()=>AddDeseas(item.name)}
                
                style={{ elevation:5, backgroundColor:"rgba(31, 144, 237, 0.872)",  padding:10, borderRadius:5}}>
                <Text style={{color:"white"}} > Add</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            )
          }
        />
      </View>
      <TouchableOpacity 
        onPress={()=>handleSendDeseases()}
        style={{paddingVertical:10, marginHorizontal:10, marginTop:1, backgroundColor:"orange",  justifyContent:"center",  alignContent:"center", alignItems:"center", border:5}}>
        <Text style={{ color: "white", fontSize: 16 }}>Make Prediction</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({

  header: {

    textAlign: "center",
    paddingTop: 20,
    backgroundColor: "rgba(31, 144, 237, 0.872)",
    paddingBottom:10,
    
    fontColor: "white",
    color: "white",
    alignContent: "center",
    alignItems: "center"


  },
  alertButtonGroup:{
    marginTop:0,
    marginRight:0,
    marginBottom:8,
    marginLeft:24,
    padding:10,
    display:"flex",
    flexDirection:'row',
    justifyContent:"flex-end"
},
alertButton:{
    marginTop:12,
    marginRight:8,
    width:100
},
alertButtonGroup:{
 
  
  padding:10,
  display:"flex",
  flexDirection:'row',
  justifyContent:"space-between",
  alignContent:"space-between"
},
alertButton:{
  marginTop:12,
  marginRight:8,
  width:120
},
alertButton2:{
  marginTop:12,
  marginRight:8,
  width:120,
  backgroundColor:"orange"
},
modalView:{
  flex:1,
  alignContent:'center',
  justifyContent:'center'
},
alert:{
  width:'100%',
  maxWidth:350,
  margin:30,
  padding:24,
  elevation:24,
  borderRadius:2,
  backgroundColor:'#fff'
},
container:{
  display:'flex',
  flex:1,
  justifyContent:'center',
  alignContent:'center',
  backgroundColor:'#fff'
},
modalContainer:{
  backgroundColor:"#ccc",
  top:0,
  left:0,
  right:0,
  bottom:0,
  position:'absolute',
},



})