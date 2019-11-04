import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import image from '../images/brick3.jpg';

export default class Names extends React.Component {
  state = {
    player1: 'Player1',
    player2: 'Player2',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          style={styles.ImageContainer}
          imageStyle={{opacity: 0.5}}>
          <View style={styles.titleDiv}>
            <Text style={styles.title}> LOGO</Text>
          </View>
          <Text style={styles.text}>Choose player 1 name</Text>
          <TextInput
            style={styles.textField}
            onChangeText={player1 => this.setState({player1})}
            value={this.state.player1}
          />
          <Text style={styles.text}>Choose player 2 name</Text>
          <TextInput
            style={styles.textField}
            onChangeText={player2 => this.setState({player2})}
            value={this.state.player2}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => navigate('NewGame')}>
              <Text style={styles.MenuText}>Start Game</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textField: {
    height: '8%',
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 60,
  },
  titleDiv: {
    position: 'absolute',
    top: '10%',
    left: '10%',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  MenuText: {
    fontSize: 60,
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonView: {
    marginTop: 180,
  },
});
