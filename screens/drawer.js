import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Aboutme from './aboutme';
import Myclasses from './myclasses';
import Funstuff from './funstuff';
import Futuregoals from './futuregoals';

const DrawerNavigator = createDrawerNavigator({
  AboutMe: Aboutme,
  Myclasses: Myclasses,
  Funstuff: Funstuff,
  Futuregoals: Futuregoals,
});

export default DrawerNavigator;