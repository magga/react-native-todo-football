import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import LoadingScreen from './../screens/LoadingScreen';

import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';

import HomeScreen from './../screens/main/HomeScreen';

const AuthNavigator = createStackNavigator({
    login: LoginScreen,
    signup: SignupScreen,
});

const AppNavigator = createSwitchNavigator({
    loading: LoadingScreen,
    auth: AuthNavigator,
    home: HomeScreen,
});

export default AppNavigator;
