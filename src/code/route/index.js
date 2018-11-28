import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoadingScreen from './../screens/LoadingScreen';

import LoginScreen from './../screens/auth/LoginScreen';

import HomeScreen from './../screens/main/HomeScreen';

const AppNavigator = createSwitchNavigator({
    
    login: LoginScreen,
    home: HomeScreen,
    loading: LoadingScreen,
});

export default AppNavigator;
