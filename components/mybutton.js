import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors'
const MyButton=props => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.textBut}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  textBut:{
    color:'white',
    fontFamily: 'open-sans-r',
    fontSize: 18
  }
});
export default MyButton;