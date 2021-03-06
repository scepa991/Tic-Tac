import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import image1 from '../images/newLogo.gif';
import image from '../images/brick3.jpg';
import RNExitApp from 'react-native-exit-app';

HandleClick = () => {
  RNExitApp.exitApp(0);
};

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          style={styles.ImageContainer}
          imageStyle={{opacity: 0.5}}>
          <Image source={image1} style={styles.Logo} />
          <View style={styles.Menu}>
            <TouchableOpacity onPress={() => navigate('Names')}>
              <Text style={styles.MenuText}>New Game</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Rules')}>
              <Text style={styles.MenuText}>Rules</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HandleClick()}>
              <Text style={styles.MenuText}>Exit Game</Text>
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
  title: {
    fontSize: 50,
    color: 'white',
  },
  titleDiv: {
    position: 'absolute',
    top: '10%',
    left: '10%',
  },
  Menu: {
    position: 'absolute',
    top: '50%',
    left: '15%',
  },
  MenuText: {
    fontSize: 60,
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 4,
    alignItems: 'center',
  },
  Logo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '-23%',
    left: '0%',
  },
});
