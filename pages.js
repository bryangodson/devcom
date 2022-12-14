import React, {
    useState,
} from "react";
import {
    View,
    Text
} from "react-native";
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

import Feed from "./Screens/Feed.js";
import Play from "./Screens/Play.js";
import Courses from "./Screens/courses.js";
import Profile from "./Screens/profile.js";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialTopTabNavigator();
const MyStack = ()=> {
    

    return (

   <Tab.Navigator
            initialRouteName="Feed"
            tabBarPosition="bottom"

            screenOptions={ {
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "#1c2733",
           
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#C25B5B",
                    borderRadius: 15,
                    paddingBottom: 6,

                },
                tabBarPressOpacity: 0.8,
                tabBarLabelStyle: {
                    color: "#fff",
                    fontSize: 10,
                    fontFamily:"Poppins_400Regular"
                 
                },
                tabBarPressColor: "#f7f7f7"

            }}
            >
      <Tab.Screen name="Feed" component={Feed}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="hexagon-multiple"
       color={focused?"tomato": "#fff"}
                            size={focused?20:18}
                            />
      </View>
                    ),
                    
                }}
                />
       <Tab.Screen
                name="Learn" component={Courses}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="book"
                            size={focused?20:18}
                            color={focused?"tomato": "#fff"}
                            />
      </View>
                    ), 


                }}
                />
              <Tab.Screen name="Saved" component={Play}
                options={ {
                        
                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                            name="star"
                            color={focused?"tomato": "#fff"}
                            size={focused?20:18}

                            />

      </View>
                    ), 

                }}
                />
                 <Tab.Screen name="Profile" component={Profile}
                options={ {

                    tabBarIcon: ({ focused })=>(
                        <View style={ {
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
      <MaterialCommunityIcons
                       name="human" 
                        color={focused?"tomato": "#fff"}
                            size={focused?20:18}

                            />
      </View>
                    ),
                   

                }}

                />
    </Tab.Navigator>
   
    );
}

export default MyStack;