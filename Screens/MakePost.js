import React, {
  useState,
  useEffect
} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';

import {
  Shadow
} from 'react-native-shadow-2';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const MakePost = ({navigation}) => {

  return (
  <View style={styles.container}>
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="#1c2733"
      />
    
        <Text>Hello New Post</Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    backgroundColor:"rgba(255,255,255,0)"
  },




});
export default MakePost;