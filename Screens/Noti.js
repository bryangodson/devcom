import React, {
  useState,
  useRef
} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  NativeModules,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  Pressable
} from 'react-native';

import {
  Shadow
} from 'react-native-shadow-2';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {
  StatusBarManager
} = NativeModules;
const sheight = StatusBarManager.HEIGHT+5;

const dms = Dimensions.get("window");
const Not=()=>{
    
    
  return (
                
    <Pressable onPress={()=>{alert("clicked")}}>
    <Shadow>
        <View style={ {
      width: dms.width-20,
      padding: 5,
      borderRadius: 12,
      flexDirection:"row",
      backgroundColor:"#fff",
      margin:10,
      justifyContent:"space-between",
      alignItems:"center",
      
      
      
    }}>
      <Image source={
      require("../assets/Images/devcomFile_25.jpg")

      } style={ {
        width: 50,
        height: 50,
borderRadius:25,
marginRight:5,
      }}

      
      />
      <View style={{
       justifyContent:"space-between",
       alignItems:"flex-start",
       flexShrink:1,
        paddingVertical:4
       
      }}>
      <Text style={{
        fontFamily:"Poppins_400Regular",
        fontSize:12,
       
      }}> Notifications on my way home 🏠🏠🏠🏠 you have any questions again for the app and other by the way I don't have</Text>
      <Text style={{
        fontFamily:"Poppins_400Regular",
        fontSize:12,
       opacity:0.5,
       width:"100%",
       textAlign:"right"
      }}>24:56</Text>
      </View>
    </View>
    </Shadow>
    </Pressable>

   
    );
}
const Notifications = ({
  navigation
}) => {


  return (<View style={styles.container}>
   <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="rgba(0,0,0,0)"
      />
        <View style={styles.cont}>
           <View style={styles.head}>
          <TouchableNativeFeedback onPress={()=>{

              navigation.goBack();
      
          }}>
    <MaterialCommunityIcons.Button name="arrow-left" size={18} color="#fff"
    backgroundColor="rgba(0,0,0,0)"
        />
           
              </TouchableNativeFeedback>
              <Text style={styles.txt}>Notifications</Text>
              <TouchableNativeFeedback
      onPress={()=> {
         alert("check")
      }}
      >
         <MaterialCommunityIcons.Button name="check" size={18} color="#fff" backgroundColor="rgba(0,0,0,0)"
        />
        </TouchableNativeFeedback>
              </View>

<Not/>

        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:"#eee"
  },
  cont: {
    height: "100%",
    width: "100%",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c2733",
    padding: 10,
    paddingTop: sheight,
  },
  burger: {
    width: 30,
    height: 20,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  one: {
    width: 28,
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 1,
    borderRadius: 2
  },
  two: {
    width: 20,
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 1,
    borderRadius: 2
  },
  txt: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
    color: "#fff"
  }


});
export default Notifications;