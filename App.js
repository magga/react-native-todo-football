import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppNavigator from './src/code/route';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppNavigator />
			</View>
		);
	}
}

export default App;
