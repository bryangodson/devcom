import React, {
  useState,
  useRef,
  useEffect
} from "react";

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    NativeModules,
    Dimensions,
    Pressable,
    Animated
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import {
    MotiView,
    MotiText
} from "moti";
import DoubleClick from "react-native-double-tap";
const { StatusBarManager} = NativeModules;
const sheight = StatusBarManager.HEIGHT;
const {width,height} = Dimensions.get("window");

const Player = ({navigation, route})=> {
  const {url} = route.params;
  


const fileExt = url.split('.').pop();
const fName="devcomFile."+fileExt;


const [downloadProgress,setDownloadProgress]=useState(0)
const [stat,setStat]=useState("No download Progress")
const [liked,setLiked]=useState(false);

const callback = (downloadProgress) => {
    let progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite*100;
     progress= Math.ceil(progress);
    setDownloadProgress(progress);
    
  };
const askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const downloadResumable = FileSystem.createDownloadResumable(
  url,
  FileSystem.documentDirectory+fName,
  {},
  callback
);
        const { uri } = await downloadResumable.downloadAsync();
        const asset = await MediaLibrary.createAssetAsync(uri)
        await MediaLibrary.createAlbumAsync("DevCom", asset, false)
    }else{
        alert("Devcom needs access to write on your storage.")
    }
}

    return (
        <View style={styles.container} >
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="rgba(0,0,0,0.2)"
      />
    
       
   <View style={styles.playWhole}>
 <MotiView 
 from={{
 scale:liked&&[0,0,0],
    opacity:liked&&0
     
 }}
animate={{
    scale:liked&&[0,10,0],
    opacity:liked&&1
}}
exit={{
    scale:liked&&[0,1,0],
    opacity:liked&&0
}}
transition={{
    type:"timing",
    duration:200
}}

style={{
    position:"absolute",
    alignSelf:"center",
    justifySelf:"center",
    zIndex:10,
    top:(height - 60) / 2,
    opacity:0,
    
    
}}
>
           <MaterialCommunityIcons name="heart" size={100}
          backgroundColor="rgba(0,0,0,0)" 
          underlayColor="rgba(0,0,0,0.2)"
          color={liked?"tomato":"#fff"}
          iconStyle={{
          marginRight: 0,
          }}

          />

          </MotiView>

     <DoubleClick
          doubleTap={() => {
            liked?setLiked(false):setLiked(true);
          }}
          delay={200}
        >
    
        
        <Image source={
        {
          uri: url
        }
        }
        style={styles.itemAct}
        resizeMode="cover"
        />

        </DoubleClick>
      <View style={{

          position: "absolute",
          top: 50,
          left: 20,
           borderRadius:10,
          backgroundColor: "rgba(0,0,0,0.2)"
        }}>
       <MaterialCommunityIcons.Button name="arrow-left" 
       size={26}
          backgroundColor="rgba(0,0,0,0)"
          underlayColor="rgba(0,0,0,0.2)"
          iconStyle={{
              marginRight:0,
          }}
          onPress={()=> {
            navigation.goBack()
          }
          }
          />
          </View>
        
        <MotiView style={ {
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems:'center',
          width:"100%",
          height:30,
          backgroundColor:"rgba(0,0,0,0.5)",
          opacity:downloadProgress<1?0:1
          
        }}
        from={{
          scale:0,
          opacity:0
        }}
        animate={{
            scale:downloadProgress>1?1:0,
            opacity:downloadProgress>1?1:0
        }}
        
        ><Text style={{
            color:'#fff',
            fontSize:14,
            fontFamily: "Poppins_400Regular",
            zIndex:6,
}}>{downloadProgress==100?"Finished Downloading":downloadProgress+" %" +" Downloaded"}</Text>
        <View style={{
            position:'absolute',
            width:downloadProgress+"%",
            height:"100%",
            backgroundColor:"#39ac6d",
            alignSelf:"flex-start",
            justifySelf:'flex-start',
            zIndex:4,
            bottom:0,
        }}></View>
        </MotiView>
     <MotiView style={styles.actions}
     
     from={
         {
             right:-30,
             opacity:0,
             scale:0
         }
     }
     animate={{
         right:10,
         opacity:1,
         scale:1
     }}
     transition={{
    delay: 300,
  }}
     >
     <Pressable onPress={()=> {
            navigation.navigate("Profile")
          }}

          >
      <Image source={ { uri: url
          }}
            style={styles.itemActSec}

            />
     </Pressable>
<MotiView 
animate={{
    scale:liked&&[0.5,1.3,0.5,1]
}}
transition={{
    type:"timing",
    duration:200
}}
>        
           <MaterialCommunityIcons.Button name="heart" size={23}
          backgroundColor="rgba(0,0,0,0)" 
          underlayColor="rgba(0,0,0,0.2)"
          color={liked?"tomato":"#fff"}
          iconStyle={{
          marginRight: 0,
          }}
          onPress={()=> {
            liked?setLiked(false):setLiked(true);
          }}


          />
             <MotiText style={{
              fontFamily:"Poppins_400Regular",
              opacity:0.8,
              fontSize:13,
              paddingTop:2,
              alignSelf:"center",
              justifySelf:"center",
              color:"#fff"
          }}>234k</MotiText>
        
          </MotiView>
          <MotiView>
       <MaterialCommunityIcons.Button name="comment" size={23}
          backgroundColor="rgba(0,0,0,0)" 
          underlayColor="rgba(0,0,0,0.2)"
          
          iconStyle={ { marginRight: 0 }}
          onPress={()=> {
            alert("comment")
          }}


          />
                              <MotiText style={{
              fontFamily:"Poppins_400Regular",
              opacity:0.8,
              fontSize:13,
              paddingTop:2,
              alignSelf:"center",
              justifySelf:"center",
              color:"#fff"
          }}>234k</MotiText>
        
          </MotiView>
          <MotiView>
       <MaterialCommunityIcons.Button name="share" size={23}
          backgroundColor="rgba(0,0,0,0)" 
          underlayColor="rgba(0,0,0,0.2)"
          iconStyle={ { marginRight: 0 }}
          onPress={()=> {
            alert("Share")
          }}


          />
                              <MotiText style={{
              fontFamily:"Poppins_400Regular",
              opacity:0.8,
              fontSize:13,
              paddingTop:2,
              alignSelf:"center",
              justifySelf:"center",
              color:"#fff"
          }}>234k</MotiText>
        
          </MotiView>
          <MotiView>
       <MaterialCommunityIcons.Button name="download" size={23}
          backgroundColor="rgba(0,0,0,0)" 
          
          underlayColor="rgba(0,0,0,0.2)"
          iconStyle={ { marginRight: 0 }}

          onPress={()=> {
       
          askPermission();
       
          }
          }
          />
                              <MotiText style={{
              fontFamily:"Poppins_400Regular",
              opacity:0.8,
              fontSize:13,
              paddingTop:2,
              alignSelf:"center",
              justifySelf:"center",
              color:"#fff"
          }}>234k</MotiText>
        
          </MotiView>
        </MotiView>
      </View>
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
    playWhole: {
    position: "relative",
    height:"100%",
    width: "100%",

  },
  itemAct: {
    height: "100%",
    width: "100%",
  },

  actions: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    bottom: 60,
    right: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:15
  },
  itemActSec: {
    height: 50,
    width: 50,
    borderRadius: 25,
  }

});
export default Player;