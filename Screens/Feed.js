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
  SafeAreaView,
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
import ActionButton from 'react-native-action-button';
const { StatusBarManager} = NativeModules;
const sheight = StatusBarManager.HEIGHT+5;

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

  const name="c</>deOffice";
  return (
    <SafeAreaView>
     <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="#1c2733"
      />
    
<View style={{
  width:"100%",
  height:"100%"
}}>
       <View style={styles.head}>
       <Text style={styles.whatIsNew}>{name}</Text>
       <View style={styles.twoRightBtn}>
 <MaterialCommunityIcons.Button
        onPress={()=> {
          navigation.navigate("MakePost")
        }}
        name="plus"
        size={18}
        color="#fff"
        backgroundColor="rgba(0,0,0,0)"
        underlayColor="rgba(255,255,255,0)"
iconStyle={{marginRight: 0}}
        />

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
            progressViewOffset={50}
            title="Getting new  if any"
            />

          }
          contentContainerStyle={ {
            paddingHorizontal: 15,
            paddingVertical: 15,
          }}
          ItemSeparatorComponent={()=>
        (
          <View
            style={ {
              height: 1,
              width: "100%",
              backgroundColor: "#8D969A",
              opacity: 0.3,
              padding: 8,
              borderRadius: 3,
              marginVertical:15,

            }}
            />
        )
        }
                columnWrapperStyle={{
          justifyContent: "space-between"
        }}

          numColumns={2}

          decelerationRate="normal"
          fadingEdgeLength={0}
          showsVerticalScrollIndicator={false}
          renderItem={({
            item
          }) => (
          <Pressable onPress={
            ()=>{
            navigation.navigate("Player",{url:item.largeImageURL})
            }
          }>
            <ImageBackground

              source={ {
                uri: item.largeImageURL
              }}
              style={{
                height: 310,
                width:dms.width<700?(dms.width / 2)-20:(dms.width / 2)-40,
                marginBottom: 15,

              }}
              imageStyle={ {
                borderRadius: 15,
              }}

              >
            <Text style={styles.txts}>{item.user}, {item.tags}</Text>
            </ImageBackground>
            </Pressable>
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
          <ActionButton.Item buttonColor="#FF4C70" title="New Project" onPress={() => alert("New project  tapped!")}
          textStyle={ {
            fontFamily: "Poppins_400Regular"
          }}

          


          >
            <MaterialCommunityIcons name="plus" color="#fff" size={20} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FF8E00' title="Stars" onPress={() => {
            navigation.navigate("Stars")
          }} textStyle={ {
            fontFamily: "Poppins_400Regular"
          }}
          
          >
            <MaterialCommunityIcons name="star-outline" color="#fff" size={20} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FF6100' title="Chats" onPress={() => {
            navigation.navigate("Messages")
          }} textStyle={ {
            fontFamily: "Poppins_400Regular"
          }}

          


          >
            <MaterialCommunityIcons name="message-reply-text-outline" color="#fff" size={20} />
          </ActionButton.Item>
        </ActionButton>
</View>
   </SafeAreaView>


  )

} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whatIsNew: {
    fontSize: 20,
    color: "#f7f7f7",
    fontFamily: "Poppins_400Regular",
    fontWeight: "600",

  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1c2733",
    padding: 10,
    paddingTop:sheight,
    
  },
  twoRightBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "rgba(255,255,200,0.1)",
    borderRadius: 12,
    padding: 4,
    width: 90,

  },
  txts: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    padding:8,
  },

  

});
export default Feed;