import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { Item, Input, Button, Toast } from 'native-base';
import IconI from 'react-native-vector-icons/Ionicons';

import { colors } from '../../helper/color';
import { FirebaseLogin } from '../../helper/firebase';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: colors.yellow
        },
        headerTitleStyle: {
            color: colors.black
        },
        headerBackTitle: null
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: '',
            password: ''
        };
    }

    _renderLogo() {
        return (
            <Image resizeMethod='resize' source={require('./../../../assets/images/man-united.png')} style={{ height: 150, width: 150, marginBottom: 50 }} />
        );
    }

    _renderForm() {
        return (
            <View style={{ width: '100%' }}>
                <Item rounded style={{ backgroundColor: 'white', borderColor: 'white' }}>
                    <IconI name='ios-mail' size={25} style={{ marginLeft: 20, marginTop: 4, marginRight: 10 }} />
                    <Input 
                        placeholder='Email' 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </Item>

                <Item rounded style={{ marginTop: 10, backgroundColor: 'white', borderColor: 'white' }} >
                    <IconI name='ios-key' size={25} style={{ marginLeft: 20, marginTop: 4, marginRight: 10 }} />
                    <Input 
                        placeholder='Password' 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        secureTextEntry 
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </Item>
            </View>
        );
    }

    _login() {
        const { email, password } = this.state;

        if (email === '') {
            return Toast.show({ text: 'Harap masukkan email terlebih dahulu',
                buttonText: 'oke',
                duration: 2500,
                type: 'danger'
            });
        }

        if (password === '') {
            return Toast.show({ text: 'Harap masukkan password terlebih dahulu',
                buttonText: 'oke',
                duration: 2500,
                type: 'danger'
            });
        }

        this.setState({ isLoading: true });

        FirebaseLogin(email, password)
        .then(() => {
            this.setState({ isLoading: false });
            Alert.alert(
                'BERHASIL',
                'Login berhasil',
                [{ text: 'okay, sir!' }]
            );
        })
        .catch((error) => {
            this.setState({ isLoading: false });
            Alert.alert(
                'ERROR',
                `Terjadi kesalahan saat melakukan login, silahkan coba lagi. \n\nError : ${error.message}`,
                [{ text: 'okay, sir!' }]
            );
        });
    }

    _renderButtonLogin() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 30 }} color={colors.white} />
            );
        }

        return (
            <Button 
                rounded 
                style={{ width: '100%', justifyContent: 'center', backgroundColor: colors.yellow, marginTop: 30 }}
                onPress={this._login.bind(this)}
            >
                <Text style={{ color: colors.black, width: '100%', textAlign: 'center' }}>LOGIN</Text>
            </Button>
        );
    }

    _renderTextBelumPunyaAccount() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('signup');
                }}
            >
                <Text style={{ fontSize: 16, marginTop: 20, color: colors.white }}>Belum punya account? Daftar</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: colors.red, flex: 1 }}>
                {this._renderLogo()}
                {this._renderForm()}
                {this._renderButtonLogin()}
                {this._renderTextBelumPunyaAccount()}
            </View>
        );
    }
}

export default LoginScreen;
