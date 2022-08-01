import React, {
  useState,
  useRef,
  useEffect
} from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    StatusBar,
} from 'react-native';
import {
    MotiView
} from 'moti';
const Chat = ()=> {
    const [item,setItem]=useState(false);
    return (
        <View style={styles.container} >
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="#1c2733"
      />
    
        
        <MotiView style={{
            height:"30%",
            width:"70%",
            backgroundColor:"red",
            position:"absolute",
            top:0,
            left:"-100%",
        }}
        animate={
            {
                left:item?"0%":"-100%"
            }
        }
        ></MotiView>
        <Button title="toggle drawer" onPress={()=>{
            item?setItem(false):setItem(true);
            
        }}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Chat;