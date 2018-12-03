import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import firebase from 'firebase';

import { colors } from '../helper/color';

class LoadingScreen extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('home');
            } else {
                this.props.navigation.navigate('login');
            }
        });
    }

	render() {
		return (
            <View 
                style={{ backgroundColor: colors.yellow, justifyContent: 'center', alignItems: 'center', flex: 1 }}
            >
                <Image 
                    source={require('./../../assets/images/persija.png')} 
                    style={{ width: 100, aspectRatio: 1, marginBottom: 50 }} 
                    resizeMethod='resize' 
                />
 				<ActivityIndicator size={'large'} color={colors.black} />
			</View>
		);
	}
}

export default LoadingScreen;
