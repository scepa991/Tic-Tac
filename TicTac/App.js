import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



import Home from './src/Home';
import NewGame from './src/NewGame';
import Rules from './src/Rules';
import Names from './src/Names';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  NewGame: {screen: NewGame},
  Rules: {screen: Rules},
  Names: {screen: Names},
});

const App = createAppContainer(MainNavigator);

export default App;
