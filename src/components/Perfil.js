import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Item, Left, Text, Form, Label, Toast } from 'native-base';

import ImagePicker from 'react-native-image-picker';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
import { ImageProfile } from './common';

const height = Dimensions.get('screen').height
const offset = (height/3) + 43;
const options = {
    title: 'Selecione uma opção',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Câmera',
    chooseFromLibraryButtonTitle: 'Galeria'
}

export default class Perfil extends Component {
    constructor(props){
        super(props);

        this.state = {
            imagePath: null
        }
    }

    onHandlerPicker = () => {
        ImagePicker.showImagePicker(options, (res) => {
            if (res.didCancel) {
                console.log('User cancelled!');
            } else if (res.error) {
                Toast.show({
                    text: 'Erro ao alterar foto',
                    buttonText: 'Dispensar',
                    type: 'danger'
                })
            } else {
                this.setState({
                    imagePath: {uri: res.uri}
                });
                Toast.show({
                    text: 'Foto Alterada com Sucesso',
                    buttonText: 'Dispensar',
                    type: 'success',
                    duration: 2000
                })
            }
        })
    }

    render() {
        return (
            <ScrollView>            
                <Container style={styles.container}>
                    <View style={styles.topStyle}>
                        <ImageProfile imagePath={this.state.imagePath} />                                           
                    </View>
                    <View>
                        <Form>
                            <Item floatingLabel >
                                <Label>Nome</Label>
                                <Text>{height}</Text>                        
                            </Item>
                            <Item floatingLabel >
                                <Label>Email</Label>
                                <Text>asdf@asdf.com</Text>
                            </Item>
                            <Item floatingLabel >
                                <Label>Telefone</Label>
                                <Text>99080-7091</Text>                        
                            </Item>
                        </Form>                                                           
                    </View>
                </Container>          
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topStyle: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f07d2a',
    },
    buttonStyle: {
        width: 56,
        height: 56,
        borderRadius: 100,
        backgroundColor: 'black'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})
