import React, { Component } from 'react';
import { View } from 'react-native';
import { Root } from 'native-base';
import firebase from 'firebase';

import AppNavigator from './src/code/route';
import firebaseConfig from './src/code/secrets/firebase';

class App extends Component {
	constructor(props) {
		super(props);

		firebase.initializeApp(firebaseConfig);
	}

	render() {
		return (
			<Root>
				<View style={{ flex: 1 }}>
					<AppNavigator />
				</View>
			</Root>
		);
	}
}

export default App;
