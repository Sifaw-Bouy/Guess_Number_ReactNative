import React, { useState } from 'react';
import {View,StyleSheet,Text , Button, TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';
import Card from '../components/card'
import Colors from '../constants/colors';
import Input from '../components/inputfld';
import NumContainer from '../components/numCont';
import BodyText from '../components/bodyText';
import MyButton from '../components/mybutton';

const StartScreen = props =>{
  const [enterdVal, setEnterVal] = useState('');
  const [sendInpConf, setInpConf] = useState(false);
  const [selectNum, setSelectNum] = useState();
  const numInptHandle = inputTxt => {
    setEnterVal(inputTxt.replace(/[^0-9]/g,''));
  };

  const resetInptHandle = () =>{
    setEnterVal('');
    setInpConf(false);
  };

  const sendInptHandle = () => {
    const choseNum = parseInt(enterdVal);
    if(isNaN(choseNum) || choseNum<=0 || choseNum>99){
      Alert.alert('Invalid Number!', 'Number must be in range of 1-99',
      [{text: 'Okey', style:'destructive', onPress: resetInptHandle}]);
      return;
    }
    setInpConf(true);
    setEnterVal('');
    setSelectNum(parseInt(enterdVal));
    Keyboard.dismiss();
  }
  let confirmOutp;
  if(sendInpConf){
    confirmOutp= (
    <Card style={styles.sumContainer}>
    <Text>Choosen Number</Text>
    <View>
      <NumContainer>{selectNum}</NumContainer>
      <MyButton onPress={()=> props.onStartGame(selectNum)}>
        Start Game
      </MyButton>
    </View>
    </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
      <View style={styles.screen}>
      <Text style={styles.titl}>Start Game</Text>
      <Card style={styles.inputSty}>
        <BodyText>Give a number</BodyText>

        <Input style={styles.input} 
        blurOnSubmit 
        autoCapitalize='none' 
        autoCorrect={false} 
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={numInptHandle}
        value={enterdVal}/>

        <View style={styles.buttonSty}>
          <View style={styles.button}>
            <Button title="Reset " 
            onPress={resetInptHandle} color={Colors.accent}/></View>
          <View style={styles.button}>
            <Button title="Send "
            onPress={sendInptHandle} color={Colors.prim}/></View>
        </View>
      </Card>
      {confirmOutp}
      </View>
    </TouchableWithoutFeedback>
  );

};
const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    alignItems: 'center'
  },
  titl:{
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans-b'
  },
  buttonSty:{
    flexDirection: 'row',
    width:'100%',
    justifyContent:'space-between',
    paddingHorizontal: 15,
  },
  inputSty:{
    width:300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button:{
    width: 100,
  },
  input:{
    width:50,
    textAlign: 'center'
  },
  sumContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  
});

export default StartScreen;

