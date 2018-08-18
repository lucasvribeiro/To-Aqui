import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';

export default class Chamada extends Component {
    constructor(props){
        super(props);

    }

    onQRCodeCall = () => {
        alert('Abrir QRCode Camera')
    }
    
    render () {
        return (
            <Container>
                <Content>
                    <View style={styles.content}>
                        <TouchableOpacity
                            onPress={() => {this.onQRCodeCall()}}
                            style={{ borderRadius: 100 }}
                        >
                            <Image 
                                source={require('./../../images/qrCodeImage.png')}
                                style={styles.imageQR} 
                            />                        
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    imageLogo: {
        flex: 1,
        alignSelf: 'flex-end',
        aspectRatio: 0.25,
        resizeMode: 'contain'

    },
    imageQR: {
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
})