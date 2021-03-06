/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './src/Home';
import MagesDescription from './src/MageDescription';
import SchoolDescription from './src/SchoolDescription';
import SchoolList from './src/SchoolList';
import ListSchoolSpell from './src/ListSchoolSpell';
import RoomsEffects from './src/RoomsEffects';
import Reference from './src/Reference';
import EvocationData from './src/EvocationData';
import ListEvocations from './src/ListEvocations'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View } from 'react-native';



const CustomTabBarBottom = props => {
  return (
    <View/>
  );
};

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Mages: {
    screen: MagesDescription,
  },
  SchoolDescription: {
    screen: SchoolDescription,
  },
  SchoolList: {
    screen: SchoolList,
  },
  ListSchoolSpell: {
    screen: ListSchoolSpell,
  },
  RoomsEffects: {
    screen: RoomsEffects,
  },
  Reference: {
    screen: Reference,
  },
  EvocationData: {
    screen: EvocationData,
  },
  ListEvocations: {
    screen: ListEvocations,
  },
},
{
  tabBarComponent: (props) => <CustomTabBarBottom  {...props} />,
});

const App = createAppContainer(TabNavigator);

export default App;
