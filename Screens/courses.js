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

import LottieView from 'lottie-react-native';

const Courses = ({navigation}) => {


  return (
  <View style={styles.container}>
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="rgba(0,0,0,0)"
      />
    
        <View style={{justifyContent:"center",
                    alignItems:"center",
                    alignSelf:"center",
                    justifySelf:"center"}}>
        <LottieView
        autoPlay
        style={{
          width: 300,
          height: 300,
          backgroundColor: '#fff',
        }}

        source={require('../assets/Images/lottieFile.json')}
      />
        <Text>Finding Some Content</Text>
        </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    backgroundColor:"rgba(255,255,255,0)"
  },




});
export default Courses;