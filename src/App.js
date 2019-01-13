import React, { Component } from 'react'
import { Root } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './Home'
import AboutScreen from './About'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    )
  }
}

export default App;