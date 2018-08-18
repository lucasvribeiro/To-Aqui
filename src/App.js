import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Icon from 'react-native-ionicons';

import Login from './components/Login';
import Chamada from './components/Chamada';
import Disciplinas from './components/Disciplinas';
import Historico from './components/Historico';
import Perfil from './components/Perfil';

const MainRouter = createStackNavigator(
  {
    Login: { screen: Login },
    mainFlow: { screen: createBottomTabNavigator(
      {
        Chamada: {
          screen: Chamada,
          navigationOptions: () => ({
            title: 'Tô Aqui',
          })
        },
        Disciplinas: { screen: Disciplinas },
        Historico: {
          screen: Historico,
          navigationOptions: () => ({
            title: 'Histórico'
          }),
        },
        Perfil: {screen: Perfil}
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            let { routeName } = navigation.state;
            let iconName;

            if(routeName === "Chamada") {
              iconName = `ios-hand${focused ? '' : '-outline'}`;
            } else if (routeName === "Disciplinas") {
              iconName = `ios-list-box${focused ? '' : '-outline'}`;
            } else if (routeName === "Historico") {
              iconName = `ios-filing${focused ? '' : '-outline'}`;
            } else if (routeName === "Perfil") {
              iconName = `ios-person${focused ? '' : '-outline'}`;
            }

            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
      }
    )}
  },
  {
    initlaRouteName: 'Login',
    headerMode: 'none',
  }
)

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  
  render() {
    return (
      <Root>
        <MainRouter />
      </Root>
    );
  }
}
