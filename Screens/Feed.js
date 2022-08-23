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
  Pressable,
  ImageBackground,
  Button,
  FlatList,
  RefreshControl,
  ToastAndroid,
  Image,
  Dimensions,
  Animated,
  ActivityIndicator,
  NativeModules,
 
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Shadow
} from 'react-native-shadow-2';


import ActionButton from 'react-native-action-button';
import LottieView from 'lottie-react-native';

const { StatusBarManager} = NativeModules;
const sheight = StatusBarManager.HEIGHT+5;
import {
    MotiView,
    MotiText
} from "moti"
const dms = Dimensions.get("window");

const Feed = ({
  navigation
})=> {
  

  const [isLoading,
    setLoading] = useState(true);
  const [data,
    setData] = useState([]);
  const [isrefreshed,
    setIsrefreshed] = useState(false);
const [bookClicked, setBookClicked]=useState(false);
const [iconColor,setIconColor]=useState("#fff");
const [offset,setOffset]=useState(0);

  const getMovies = async () => {
    try {
      const response = await fetch('https://pixabay.com/api/?key=28541015-044275872181ed7d8ef08c58c&image_typ=photo&per_page=110');
      const json = await response.json();
      setData(json.hits);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
    
  }, []);
  
  const onRefresh = async ()=> {

    try {
      setIsrefreshed(true)
      const response = await fetch('https://pixabay.com/api/?key=28541015-044275872181ed7d8ef08c58c&image_type=photo&pretty=true');
      const json = await response.json();
      setData(json.hits);
      ToastAndroid.show("Refresh Success",ToastAndroid.SHORT)
    } catch (error) {
      alert(error);
    } finally {
      setIsrefreshed(false);
    }
  }

  const name="Haipe";
  
  /*const  scrollHandeler=(event) => {
      
      let currentOffset = event.nativeEvent.contentOffset.y;
     // let direction = currentOffset > offset ? 'down' : 'up';
      
      alert(currentOffset); // up or down accordingly
  }
  */
  
  return (
<View style={styles.container}>
     <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="rgba(0,0,0,0)"
      />

       <View style={styles.head}

       >
       <Text style={styles.whatIsNew}>{name}</Text>
       <View style={styles.twoRightBtn}>
 <MaterialCommunityIcons.Button
        onPress={()=> {
          navigation.navigate("Notifications")
        }}
        name="bell-outline"
        size={18}
        color="#fff"
        backgroundColor="rgba(0,0,0,0)"
        underlayColor="rgba(255,255,255,0)"
        iconStyle={{marginRight: 0}}
        />
       </View>
      </View>

      {isLoading ? <ActivityIndicator size={40} color="#FF4C70" />: (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          refreshControl={
          <RefreshControl
            refreshing={isrefreshed}
            onRefresh={onRefresh}
            colors={["#53b76f", "#C87000", "royalblue", "#FFB000", "#FF0044"]}
            progressViewOffset={100}
         
            />

          }
          fadingEdgeLength={30}
          initialNumToRender={30}
          contentContainerStyle={ {
            paddingHorizontal: 5,
            paddingVertical: 6,
          }}
                columnWrapperStyle={{
          justifyContent: "space-between"
        }}
          ItemSeparatorComponent={()=>
        (
          <View
            style={ {
              height: 1,
              width: "100%",
              backgroundColor: "#8D969A",
              opacity: 0,
              padding: 2,
              borderRadius: 10,
              marginVertical:20,

            }}
            />
        )
        }
                
       
          decelerationRate="normal"
         
          showsVerticalScrollIndicator={true}
                  columnWrapperStyle={{
          justifyContent: "space-between"
        }}

          numColumns={2}
           
          renderItem={({
            item
          }) => (

          <View style={{
          
              justifyContent:'space-between',
              alignItems:'flex-start'
          }}
          
          >
          
          <View style={{
              width:(dms.width / 2) - 10,
              paddingVertical:8,
              flexDirection:"row"
              
          }}>
          
       
          <Image
                   source={ {
                uri: item.largeImageURL
              }}
              style={{
                  height:50,
                  width:50,
                  borderRadius:25,
           
                  
              }}
                
                />

              
                
                   <View style={{
                   flexShrink:1,
              }}>
            <Text style={styles.txtss}>{item.user}</Text>
             <Text numberOfLines={1} style={styles.txts}>{item.tags}</Text>
            
            </View>

          </View>
          

          <View style={{
              width:(dms.width / 2) - 10,
                marginBottom: 15,
              height:300,
              borderRadius:10

          }}>     
            <Pressable onPress={
            ()=>{
            navigation.navigate("Player",{
            url:item.largeImageURL
                
            })
            }
          }>
        
            <Image

              source={ {
                uri: item.largeImageURL
              }}
              style={{
                  height:300,
     width:(dms.width / 2) - 10,
                marginBottom: 15,
                  borderRadius:10,
         
                  
                  
              }}
              />

           
    </Pressable>
              </View>
              

             
              </View>

          )}
          />
      )}
   
         <ActionButton buttonColor="#ef4b4c" btnOutRange="#FF4C70" buttonTextStyle={ {
        fontFamily: "Poppins_400Regular"
      }}

        renderIcon={()=>(
          <MaterialCommunityIcons name="menu" size={20} color="#fff" />
        )
        }
        bgColor="rgba(0,0,0,0.6)"
        
        hideShadow={true}
        degrees={90}
        >
          <ActionButton.Item buttonColor="#FF4C70" title="New Post" 
          textStyle={ {
            fontFamily: "Poppins_400Regular"
          }}
          onPress={()=>{
              navigation.navigate("MakePost")
          }}
          >
            <MaterialCommunityIcons name="pen-plus" color="#fff" size={20} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#FF6100' title="Chats"
          textStyle={ {
            fontFamily: "Poppins_400Regular"
          }}
        onPress={()=>{  
        navigation.navigate("Chat")
        }}
          >
            <MaterialCommunityIcons name="message-reply-text-outline" color="#fff" size={20} />
          </ActionButton.Item>
        </ActionButton>
  
</View>

  )

} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
      width:"100%",
  height:"100%",
  backgroundColor:"#eee"
  },
  whatIsNew: {
    fontSize: 20,
    color: "tomato",
    fontFamily: "Poppins_400Regular",
    fontWeight: "600",

  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c2733",
    padding: 10,
    width:"100%",
    paddingTop:sheight,
    
  },
  twoRightBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor:"#eee",
    borderRadius:"50%",
    padding: 4,


  },
  txts: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    paddingLeft:4,
    opacity:0.5,
  },
  txtss: {
    color: "#000",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    padding:4,
    paddingBottom:2,
    paddingTop:0,
    fontWeight:"600"
  },

});
export default Feed;