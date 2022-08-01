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
} from 'react-native';

const Player = ({navigation, route})=> {
  const {url} = route.params;
    return (
        <View style={styles.container} >
  <StatusBar
      animated={true}
      translucent={true}
      barStyle="light-content"
      backgroundColor="#1c2733"
      />
       <View>
        <Text>{url}</Text>
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
});
export default Player;