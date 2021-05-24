import React from 'react';
import {View, Text, StyleSheet, Button,Image} from 'react-native';
import BodyText from '../components/bodyText';
import TitleText from '../components/titleText';
import Colors from '../constants/colors';
import MyButton from '../components/mybutton';

const GameOver= props =>{
  return(
    <View style={styles.screen}>
      <TitleText style={styles.bold}>GAME OVER!</TitleText>
      <Image style={styles.image} 
      source={require('../assets/win.png')}
      //source={{uri:'link to image'}} for web images
      resizeMode="cover"/>
      <View style={styles.resText}>
        <BodyText>Took 
          <Text style={styles.highlight}> {props.roundsNum} </Text> 
          rounds to guess the number 
          <Text style={styles.highlight}> {props.userNum}</Text>
        </BodyText>
      </View>
      <MyButton onPress={props.onNewG}>Start Again</MyButton>
    </View>
  )
};

const styles= StyleSheet.create({
  screen:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bold:{//overrides color in titletext
    color:'black'
  },
  image:{
    width:300,
    height:300,
    borderRadius: 150
  },
  highlight:{
    color: Colors.prim,
    fontSize:20,
  },
  resText:{
    textAlign:'center',
    marginBottom: 10,
  }
});

export default GameOver;