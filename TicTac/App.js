
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Home from "./src/Home"
import NewGame from "./src/NewGame"



const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  NewGame: {screen: NewGame},
});

const App = createAppContainer(MainNavigator);

export default App;
