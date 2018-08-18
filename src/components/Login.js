import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Button, Text, Form, Label, Item, Input } from 'native-base';

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            ra: '',
            senha: '',
            isLoading: ''
        }
    }
    onNavigation = () => {
        this.props.navigation.navigate('Chamada')
    }
    
    render () {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card} >
                        <CardItem>
                            <Form style={styles.form}>
                                <Item floatingLabel>
                                    <Label>R.A</Label>
                                    <Input 
                                        onChangeText={ra => this.setState({ ra })}
                                        value={this.state.ra}
                                        keyboardType='numeric'
                                    />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Senha</Label>
                                    <Input 
                                        onChangeText={senha => this.setState({ senha })}
                                        value={this.state.senha}
                                        secureTextEntry
                                    />
                                </Item>
                            </Form>
                        </CardItem>

                        <CardItem style={styles.cardButton}>
                            <Button
                                primary
                                onPress={() => {this.onNavigation()}}
                            >
                                <Text>Acessar Conta</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 15,
        marginLeft: 15,
    },
    form: {
        flex: 1
    },
    cardButton: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    container: {
        
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center'
        // alignItems: 'flex-start',
    }
})