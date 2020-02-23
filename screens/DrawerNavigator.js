import React from 'react';
import { View, Image, Dimensions, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

const WINDOW_WIDTH = Dimensions.get('window').width;

const customContentComponent = props => (
  <SafeAreaView
    style={{ flex: 1, height: '100%', backgroundColor: '#43484d', marginTop: 36 }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      backgroundColor: '#43484d',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
    contentComponent: customContentComponent,
  }
);

export default DrawerNavigator;
