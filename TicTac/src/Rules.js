import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
import image from '../images/brick3.jpg';

export default class Rules extends React.Component {
  render() {
      
    return (
      <View style={styles.container}>
          <ImageBackground
          source={image}
          style={styles.ImageContainer}
          imageStyle={{opacity: 0.5}}>
          <View style={styles.titleDiv}>
            <Text style={styles.title}>Rules</Text>
          </View>
          <View style={styles.TextDiv}>
            <Text style={styles.text}>
                 1. The game is played on a grid that's 3 squares by 3 squares.
            </Text>
            <Text style={styles.text}>
                 2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
            </Text>
            <Text style={styles.text}>
                 3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
            </Text>
            <Text style={styles.text}>
                 4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
            </Text>
           </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    
  },
  text: {
    fontSize: 20,
    color: 'white',
    
    marginBottom: 4,
  },
  TextDiv: {
      position: 'absolute',
      top: '15%',
      left: '5%',
      right: '5%',
  },
  ImageContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
  titleDiv: {
    position: 'absolute',
    top: '5%',
    left: '35%'
  }
});
