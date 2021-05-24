import React from 'react';
import { View , Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
const NumContainer = props => {
  return(
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 9,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number:{
    color: Colors.accent,
    fontSize: 25
  }
})
export default NumContainer;