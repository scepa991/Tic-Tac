
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Home from "./src/Home"
import NewGame from "./src/NewGame"
import Rules from "./src/Rules"



const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  NewGame: {screen: NewGame},
  Rules: {screen: Rules},
});

const App = createAppContainer(MainNavigator);

export default App;
