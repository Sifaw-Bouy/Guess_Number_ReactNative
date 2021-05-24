import React , {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView,FlatList} from 'react-native';
import NumContainer from '../components/numCont';
import Card from '../components/card';
import MyButton from '../components/mybutton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/bodyText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const genRandNumBet = (max,min,exclude) =>{
  min= Math.ceil(min);
  max= Math.floor(max);
  const randN = Math.floor(Math.random()*(max-min))+min;
  if(randN === exclude){
    return genRandNumBet(max,min,exclude);
  }else{
    return randN;}
};

const renderItems = (val, numR) =>{
  return (
    <View key={val} style={styles.liststy}>
      <BodyText>
        Round#: {numR}
       </BodyText>
      <BodyText>
         {val}
       </BodyText>
    </View>
  );
}
const GameScreen = props =>{
  const initlGuess =  genRandNumBet(1,100,props.userChoice);
  const [curGuess, setGuess] = useState(initlGuess);
  const [pastGuesses,setPastGuess] = useState([initlGuess]);
  const curLow = useRef(1);
  const curHigh = useRef(100);
  const {userChoice, onGameOver} = props;
  useEffect(()=>{
    if(curGuess == userChoice){
      onGameOver(pastGuesses.length);
    }
  },[curGuess, userChoice,onGameOver]);
  const nextGuessHandle = direct =>{
    if((direct === 'low' && curGuess<props.userChoice)
    || (direct =='high' && curGuess>props.userChoice)){
      Alert.alert("You wrong!","pick again",
      [{title:'Okey', style:'cancel'}])
      return;
    }
    if(direct === 'low'){
      curHigh.current = curGuess;
    }else{
      curLow.current = curGuess+1;
    }
    const nextNum= genRandNumBet(curHigh.current,curLow.current,curGuess);
    setGuess(nextNum);
    setPastGuess(curPastGuess=>[nextNum, ...curPastGuess]);
  };

  return(
    <View style={styles.screen}>
      <Text>I guessed:</Text>
      <NumContainer>{curGuess}</NumContainer>
      <Card style={styles.buttonCon}>
        <MyButton onPress={nextGuessHandle.bind(this,'low')}>
          <Ionicons name="md-remove" size={20} color='white'/>
        </MyButton>
        <MyButton onPress={nextGuessHandle.bind(this,'high')}>
        <Ionicons name="md-add" size={20} color='white'/>
        </MyButton>
      </Card>
      <View style={styles.listv}>
      <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess,index)=>
        renderItems(guess,pastGuesses.length-index) 
        )}
      </ScrollView>
      </View>
    </View>
  );
};


const styles= StyleSheet.create({
  screen: {
    flex:1,
    padding:10,
    alignItems: 'center'
  },
  buttonCon:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  liststy:{
    borderColor: 'gray',
    borderWidth:1,
    padding: 13,
    marginVertical:10,
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent:'space-around',
    width:'60%'
  },
  listv:{
    width:'50%',
    flex:1//to make it scrollable in andrio
  },
  list:{
    flexGrow:1,
    alignItems:'center',
    justifyContent: 'flex-end'//list grows from bottom of screen
  }
});

export default GameScreen;