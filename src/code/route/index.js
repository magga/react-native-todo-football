import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoadingScreen from './../screens/LoadingScreen';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';

import HomeScreen from './../screens/main/HomeScreen';

const AppNavigator = createSwitchNavigator({
    signup: SignupScreen,
    login: LoginScreen,
    home: HomeScreen,
    loading: LoadingScreen,
});

export default AppNavigator;
