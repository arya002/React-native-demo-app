import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/login';
import Drawer from '../screens/drawer';

const ScreenNavigator = createStackNavigator({
    Login: {screen: Login,
        navigationOptions: {
            title: 'Sign Up'
        }},
    
    Drawer: {screen: Drawer,
        navigationOptions: {
            header: null
        }},
})

export default createAppContainer(ScreenNavigator);
