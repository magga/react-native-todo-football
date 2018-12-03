import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { Item, Input, Button, Toast } from 'native-base';
import IconI from 'react-native-vector-icons/Ionicons';

import { colors } from '../../helper/color';
import { FirebaseSignup } from '../../helper/firebase';

class SignupScreen extends Component {
    static navigationOptions = {
        title: 'Signup',
        headerStyle: {
            backgroundColor: colors.softLightBrown
        },
        headerTitleStyle: {
            color: colors.black
        },
        headerTintColor: colors.black
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: '',
            password: '',
            ulangPassword: ''
        };
    }

    _renderLogo() {
        return (
            <Image resizeMethod='resize' source={require('./../../../assets/images/as-roma.png')} style={{ height: 150, width: 150, marginBottom: 50 }} />
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

                <Item rounded style={{ marginTop: 10, backgroundColor: 'white', borderColor: 'white' }} >
                    <IconI name='ios-shuffle' size={25} style={{ marginLeft: 20, marginTop: 4, marginRight: 10 }} />
                    <Input 
                        placeholder='Ulang Password' 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        secureTextEntry 
                        value={this.state.ulangPassword}
                        onChangeText={(text) => this.setState({ ulangPassword: text })}
                    />
                </Item>
            </View>
        );
    }

    _signup() {
        const { email, password, ulangPassword } = this.state;

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

        if (password !== ulangPassword) {
            return Toast.show({ text: 'Password yang anda masukkan tidak sesuai',
                buttonText: 'oke',
                duration: 2500,
                type: 'danger'
            });
        }

        this.setState({ isLoading: true });

        // DO SIGNUP
        FirebaseSignup(email, password)
        .then(() => {
            this.setState({ isLoading: false });
            Alert.alert(
                'BERHASIL',
                'Signup berhasil dilakukan',
                [{ text: 'okay, sir!' }]
            );
        })
        .catch((error) => {
            this.setState({ isLoading: false });
            Alert.alert(
                'ERROR',
                `Terjadi kesalahan saat melakukan signup, silahkan coba lagi. \n\nError : ${error.message}`,
                [{ text: 'okay, sir!' }]
            );
        });
    }

    _renderButtonSignup() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 30 }} color={colors.white} />
            );
        }

        return (
            <Button 
                rounded 
                style={{ width: '100%', justifyContent: 'center', backgroundColor: colors.yellow, marginTop: 30 }}
                onPress={this._signup.bind(this)}
            >
                <Text style={{ color: colors.black, width: '100%', textAlign: 'center' }}>SIGNUP</Text>
            </Button>
        );
    }

    _renderTextBelumPunyaAccount() {
        return (
            <TouchableOpacity>
                <Text style={{ fontSize: 16, marginTop: 20, color: colors.white }}>Belum punya account? Daftar</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: colors.darkBlue, flex: 1 }}>
                {this._renderLogo()}
                {this._renderForm()}
                {this._renderButtonSignup()}
            </View>
        );
    }
}

export default SignupScreen;
