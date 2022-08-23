import React, {
    useEffect,
    useState,
    useRef
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    NativeModules,
    Image,
    Button,
    Dimensions

} from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import storage from "@react-native-async-storage/async-storage";
import {
    MotiView,
    MotiText
} from "moti";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {
    StatusBarManager
} = NativeModules;
const sheight = StatusBarManager.HEIGHT;
//1. import the library
//2. get permission
//3. do push notifications on button click
//4. schedule push notifications
const {width,height}=Dimensions.get("window");
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
});

const Profile = ({
    navigation
}) => {
   /* const [notification,
        setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        const getPermission = async () => {
            if (Constants.isDevice) {
                const {
                    status: existingStatus
                } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const {
                        status
                    } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    alert('Enable push notifications to use the Profile!');
                    await storage.setItem('expopushtoken', "");
                    return;
                }
                const token = (await Notifications.getExpoPushTokenAsync()).data;
                await storage.setItem('expopushtoken', token);
            } else {
                alert('Must use physical device for Push Notifications');
            }

            if (Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }
        }

        getPermission();

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {});

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    },
        []);

    const onClick = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "DevErites",
                body: "You have a new message...Open app to see now",
                data: {
                    data: "data goes here"
                }
            },
            trigger: {
                seconds: 1
            }
        });
    }*/
    const url = "https://www.bryanmedia.site";
  //  const Pic=NotMyUrl==""?"require('../assets/Images/devcomFile_25.jpg')":`{uri:${NotMyUrl}}`;
    const [menuClicked,setMenuClicked]=useState(false);
    return (
        <View style={styles.container}>
      <StatusBar
            animated={true}
            translucent={true}
            barStyle="light-content"
            backgroundColor="rgba(0,0,0,0)"
            />
            <MotiView style={{
                height:"68%",
                width:"100%",
                position:"absolute",
                bottom:"-100%",
                zIndex:10,
                backgroundColor:"#1c2733"
                ,
                left:0,
                
            }}
            from={{
                bottom:"-100%",
                scale:0,
                opacity:0,
                borderRadius:600
            }}
            animate={{
                bottom:menuClicked?0:"-100%",
                scale: menuClicked?1:0,
               opacity: menuClicked?1:0,
               borderRadius:menuClicked?0:600,
            }}
            
            >
            <Text>Custom menu action</Text>
            </MotiView>
             <ImageBackground
            source={require("../assets/Images/devcomFile_25.jpg")}

            style={ {
                height: 210,
                width: "100%",

            }}
            blurRadius={20}
            >
            <View
                style={ {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: "rgba(255,255,255,0.5)"
                }}
                />
                <View style={ {
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    padding: 10,
                    paddingTop: sheight+4

                }}>
                <View>
       <MaterialCommunityIcons.Button
                        name="arrow-left"
                        size={26}
                        backgroundColor="rgba(0,0,0,0)"
                        color="rgba(0,0,0,0.5)"
                        underlayColor="rgba(0,0,0,0.2)"
                        iconStyle={ {
                            marginRight: 0,
                        }}
                        onPress={()=> {
                            navigation.goBack()
                        }
                        }
                        />
                </View>
                <View style={ {
                        alignItems: "center",
                        paddingBottom: 20,
                        justifyContent: "space-between"
                    }}>
                    <View style={ {
                            position: "relative"
                        }}>
                <Image
                            source={require("../assets/Images/devcomFile_25.jpg")}

                            style={ {
                                height: 120,
                                width: 120,
                                borderRadius: 60,

                            }}
                            />

                        <TouchableOpacity onPress={()=> {
                                alert ("Heyy")
                            }}>
         <View style={ {
               position: "absolute",
                 bottom: 0,
                  right: 10,
            backgroundColor: "#1c2733",
                     height: 30,
                   width: 30,
         borderRadius: 15,
               justifyContent:'center',
            alignItems: "center",
            padding:0,
            margin:0,

                                }}

                                >
                        <Text style={ {
                             fontSize: 22,
               fontFamily: "Poppins_400Regular",
                    
                      color: "#fff"

                                }}>+</Text>
                        </View>
                        </TouchableOpacity>
           </View>
                    <Text style={ {
                            paddingTop: 6,
                            paddingBottom: 2,
                            color: "#000",
                            fontSize: 18,
                            fontWeight: "600",
                            fontFamily: "Poppins_400Regular",
                            paddingRight: 4,
                        }}
                        >Bryan Godson Danquah ✓</Text>
                    <Text style={ {
                            color: "#000",
                            opacity: 0.5,
                            fontFamily: "Poppins_400Regular",
                        }}> @bryan_godson</Text>
                    </View>
                    <View>
       <MaterialCommunityIcons.Button
                        name="menu"
                        size={26}
                        backgroundColor="rgba(0,0,0,0)"
                        underlayColor="rgba(0,0,0,0.2)"
                        color="rgba(0,0,0,0.5)"
                        onPress={()=> {
                            
                            if (menuClicked) {
                                setMenuClicked(false);
                            }else{
                            setMenuClicked(true)
                            }
                        }
                        }
                        iconStyle={ {
                            marginRight: 0,
                        }}
                        />
                </View>
                </View>
                </ImageBackground>

                <View
            style={ {
                flexDirection: "row",

                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
                paddingHorizontal: 20,

            }}>
                 <View style={styles.action}>
          <Text style={styles.actionText}>
         344k
            </Text>
                     <Text style={styles.txt}>
                     Posts
                     </Text>
                </View>
                <View style={ {
                    height: 15,
                    width: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",

                }} />
                <View style={styles.action}>
                 <Text style={styles.actionText}>
                       55k
                      </Text>
                 <Text style={styles.txt}>
                        Following
                        </Text>
                </View>
                   <View style={ {
                    height: 15,
                    width: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",

                }} />
                <View style={styles.action}>
                <Text style={styles.actionText}>
                       23k
                      </Text>
                 <Text style={styles.txt}>
                         Followers
                       </Text>
                </View>


                </View>
                <View
            style={ {
                width: '100%',
                height: 1,
                backgroundColor: "#ccc",
                opacity: 0.3,
                marginVertical: 5,
            }}
            />
            <View style={ {
                flexDirection: "row",
                paddingHorizontal: 20,
                padding: 5,
                alignSelf:"center"

            }}>
            <Text style={ {
                    color: "tomato",
                    paddingRight: 30,
                    fontFamily: "Poppins_400Regular",
                    opacity: 0.75,
                }}>Links </Text>
            <View style={ {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
               <MaterialCommunityIcons
                    name="link"
                    color="rgba(0,0,0,0.5)"
                    size={13}
                    backgroundColor="rgba(0,0,0,0)"
                    underlayColor="rgba(0,0,0,0.2)"

                    iconStyle={ {
                        marginRight: 20,
                        borderRadius:6.5
                    }}
                    />
               <TouchableOpacity onPress={()=> {

                        WebBrowser.openBrowserAsync(url)

                    }}>
               <Text style={ {
                            fontFamily: "Poppins_400Regular",
                            fontSize: 15,
                            opacity: 0.7,
                            color: "#2A6389",
                            paddingLeft: 10,
                        }}>
               {url}
               </Text>
               </TouchableOpacity>
                </View>
            </View> 
            <View style={ {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              
              alignSelf:"center"
                
                
            }}>
       <MaterialCommunityIcons.Button
                name="github"
                color="#000"
                size={17}
                backgroundColor="rgba(255,255,255,0.5)"
                underlayColor="rgba(0,0,0,0.2)"
                onPress={()=> {
                    alert("menu")
                }
                }
                iconStyle={ {
                    marginRight: 0,
                }}
                />
       <MaterialCommunityIcons.Button
                name="facebook"
                color="#3b5998"
                size={17}
                backgroundColor="rgba(255,255,255,0.5)"
                underlayColor="rgba(0,0,0,0.2)"
                onPress={()=> {
                    alert("menu")
                }
                }
                iconStyle={ {
                    marginRight: 0,
                }}
                />
  <MaterialCommunityIcons.Button
                name="instagram"
                color="tomato"
                size={17}
                backgroundColor="rgba(255,255,255,0.5)"
                underlayColor="rgba(0,0,0,0.2)"
                onPress={()=> {
                    alert("menu")
                }
                }
                iconStyle={ {
                    marginRight: 0,
                }}
                />
                               <MaterialCommunityIcons.Button
                name="twitter"
                color="#00acee"
                size={17}
                backgroundColor="rgba(255,255,255,0.5)"
                underlayColor="rgba(0,0,0,0.2)"
                onPress={()=> {
                    alert("menu")
                }
                }
                iconStyle={ {
                    marginRight: 0,
                }}
                />
      <MaterialCommunityIcons.Button
                name="linkedin"
                color="#0072b1"
                size={17}
                backgroundColor="rgba(255,255,255,0.5)"
                underlayColor="rgba(0,0,0,0.2)"
                onPress={()=> {
                    alert("menu")
                }
                }
                iconStyle={ {
                    marginRight: 0,
                }}
                />
            </View>
              </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    action: {
        justifyContent: "center",
        alignItems: "center",
    },
    actionText: {
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        fontWeight: "600"
    },
    txt: {
        fontFamily: "Poppins_400Regular",
        opacity: 0.6,
        fontSize: 13,
    }
});
export default Profile;