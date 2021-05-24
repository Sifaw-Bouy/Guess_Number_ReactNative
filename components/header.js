import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../components/titleText';
const Header = props =>{
  return(
    <View style={styles.head}>
      <TitleText style={styles.headT}>
        {props.title}
      </TitleText>
    </View>
  );
};
const styles = StyleSheet.create({
  head:{
    width:'100%',
    height:90,
    paddingTop:36,
    backgroundColor:Colors.prim,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default Header