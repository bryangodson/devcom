import React, {
  useState
} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';

import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Courses = ({navigation}) => {


  return (<View style={styles.container}>
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="#1c2733"
      />
    
        <Text>Hello courses</Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    backgroundColor:"rgba(255,255,255,0)"
  },




});
export default Courses;