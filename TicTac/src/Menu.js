import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Menu extends React.Component {
  render() {
      
    return (
      <View style={styles.Menu}>
       <TouchableOpacity><Text style={styles.MenuText}>New Game</Text></TouchableOpacity>
       <TouchableOpacity><Text style={styles.MenuText}>Rules</Text></TouchableOpacity>
       <TouchableOpacity ><Text style={styles.MenuText}>Exit Game</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Menu: {
    position: 'absolute',
    top: '50%',
    
  },
  MenuText: {
    fontSize: 60,
    color: 'white',
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 4,
  },
});
