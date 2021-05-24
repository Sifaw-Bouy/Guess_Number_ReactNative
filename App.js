import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; 
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartScreen from './screens/startScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';
//custom fonts
const fetchFont = () => {
  return Font.loadAsync({
    'open-sans-r':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-b': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNum, setUserNum] = useState();//hold user number
  const [guessRounds, setGuessRounds] =useState(0);//tracking rounds
  const [dataload, setDataload] = useState(false);
  if(!dataload){
    return <AppLoading startAsync={fetchFont} 
    onFinish={()=>setDataload(true)}
    onError= {(erro) => console.log(erro)}/>;
  }

  const startNewGameHandle = () => {
    setGuessRounds(0);
    setUserNum(null);
  };
  
  const startGameHandle = (selectNum) => {
    setUserNum(selectNum);
  };

  const gameOverHandle = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandle}/>;
  if(userNum && guessRounds<=0){
    content= <GameScreen userChoice={userNum } onGameOver={gameOverHandle}/>;
  
  }else if(guessRounds>0){
    content= <GameOverScreen roundsNum={guessRounds} 
    userNum={userNum} onNewG={startNewGameHandle}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
