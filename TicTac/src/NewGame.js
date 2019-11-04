import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground,
} from 'react-native';
import image from '../images/brick3.jpg';

export default class NewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
    };
  }
  componentDidMount() {
    this.initalizeGame();
  }

  onNewGamePress = () => {
    this.initalizeGame();
  };

  initalizeGame = () => {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
    });
  };

  // Rerurns 1 if Player 1 won, -1 if Player 2 won, or a 0 if no one has won.
  getWinner = () => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;

    //check rows
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check columns
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check the diagonals...
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }
    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    //there is no winer
    return 0;
  };

  onTilePress = (row, col) => {
    //Don't allow tiles to change
    var value = this.state.gameState[row][col];
    if (value !== 0) {
      return;
    }

    // Grab current player ..
    var currentPlayer = this.state.currentPlayer;

    //set the correct tile..
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    //switch to other player..
    var nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    //Check for winners
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert('Player 1 is the winner');
      this.initalizeGame();
    } else if (winner == -1) {
      Alert.alert('Player 2 is the winner');
      this.initalizeGame();
    }
  };

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return (
          <Text
            style={{
              color: '#B8860B',
              fontSize: 90,
              textAlign: 'center',
              shadowColor: 'red',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 1,
              shadowRadius: 8,
              elevation: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            X
          </Text>
        );
      case -1:
        return (
          <Text
            style={{
              color: '#B8860B',
              fontSize: 90,
              textAlign: 'center',
              shadowColor: 'red',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 1,
              shadowRadius: 8,
              elevation: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            O
          </Text>
        );
      default:
        return <View />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          style={styles.ImageContainer}
          imageStyle={{opacity: 0.5}}>
          <View style={styles.titleDiv}>
            <Text style={styles.title}>Tic - Tac</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.onTilePress(0, 0)}
              style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
              {this.renderIcon(0, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(0, 1)}
              style={[styles.tile, {borderTopWidth: 0}]}>
              {this.renderIcon(0, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(0, 2)}
              style={[styles.tile, {borderTopWidth: 0, borderRightWidth: 0}]}>
              {this.renderIcon(0, 2)}
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.onTilePress(1, 0)}
              style={[styles.tile, {borderLeftWidth: 0}]}>
              {this.renderIcon(1, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(1, 1)}
              style={[styles.tile, {}]}>
              {this.renderIcon(1, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(1, 2)}
              style={[styles.tile, {borderRightWidth: 0}]}>
              {this.renderIcon(1, 2)}
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.onTilePress(2, 0)}
              style={[styles.tile, {borderBottomWidth: 0, borderLeftWidth: 0}]}>
              {this.renderIcon(2, 0)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(2, 1)}
              style={[styles.tile, {borderBottomWidth: 0}]}>
              {this.renderIcon(2, 1)}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.onTilePress(2, 2)}
              style={[
                styles.tile,
                {borderBottomWidth: 0, borderRightWidth: 0},
              ]}>
              {this.renderIcon(2, 2)}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <Button title="New Game" onPress={this.onNewGamePress} />
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
  tile: {
    borderWidth: 7,
    width: 100,
    height: 100,
    borderColor: '#4C35C0',
    shadowColor: 'blue',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 1,
  },
  button: {
    padding: 50,
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
    color: 'blue',
  },
  titleDiv: {
    position: 'absolute',
    top: '10%',
    left: '25%',
  },
});
