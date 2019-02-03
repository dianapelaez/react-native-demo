import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  Body,
  Button,
} from 'native-base'
import {
  Modal,
  AsyncStorage
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Styles from './styles'

import Tutorial from './Tutorial'

class HomeScreen extends Component {

  state = {
    showTutorial: false,
  }

  async componentWillMount(){
    const tutorialShown = JSON.parse(await AsyncStorage.getItem('home-tutorial'))
    if (!tutorialShown) {
      AsyncStorage.setItem('home-tutorial', String(true))
      this.setState({ showTutorial: true })
    }
  }

  render() {
    const { showTutorial } = this.state
    return (
      <Container style={Styles.container}>
        <LinearGradient style={Styles.tutorialBackground} colors={['#6441A5', '#2a0845']}>
          <Header transparent>
            <Body>
              <Title>My App!</Title>
            </Body>
          </Header>
        </LinearGradient>
        <Content style={Styles.content}>
          <Text>Mi primera app! :)</Text>
          <LinearGradient style={Styles.buttonBackground} colors={['#50C9C3', '#96DEDA']}>
            <Button transparent full light onPress={() => this.props.navigation.push('About')}>
              <Text allowFontScaling={false} uppercase={false}>{ 'Navegar al about screen'.toUpperCase() }</Text>
            </Button>
          </LinearGradient>
        </Content>
        <Modal
          transparent={true}
          visible={showTutorial}
          onRequestClose={() => console.log("Closing...")}>
            <Tutorial></Tutorial>
        </Modal>
      </Container>
    )
  }
}

export default HomeScreen
