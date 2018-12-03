import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'native-base';

import { FirebaseLogout } from '../../helper/firebase';
import { colors } from '../../helper/color';

class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	_logout() {
		Alert.alert(
			'WARNING',
			'Apakah anda yakin untuk logout?',
			[{ text: 'tidak' }, {
				text: 'ya',
				onPress: () => {
					this.setState({ isLoading: true });

					FirebaseLogout()
					.then(() => {
						this.setState({ isLoading: false });
						Alert.alert(
							'BERHASIL',
							'Logout berhasil',
							[{ text: 'okay, sir!' }]
						);
					})
					.catch((error) => {
						this.setState({ isLoading: false });
						Alert.alert(
							'ERROR',
							`Terjadi kesalahan saat melakukan logout, silahkan coba lagi. \n\nError : ${error.message}`,
							[{ text: 'okay, sir!' }]
						);
					});
				}
			}]
		);
	}

	_renderButton() {
		if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 30 }} color={colors.softDarkBrown} />
            );
        }

        return (
            <Button 
                rounded 
                style={{ width: '60%', justifyContent: 'center', backgroundColor: colors.softDarkBrown, marginTop: 30, alignSelf: 'center' }}
                onPress={this._logout.bind(this)}
            >
                <Text style={{ color: colors.white, width: '100%', textAlign: 'center' }}>LOGOUT</Text>
            </Button>
        );
	}

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.softYellow, flex: 1 }}>
				{this._renderButton()}
			</View>
		);
	}
}

export default HomeScreen;
