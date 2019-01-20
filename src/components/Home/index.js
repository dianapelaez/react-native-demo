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
import Styles from './styles'

class HomeScreen extends Component {
  render() {
    return (
      <Container style={Styles.container}>
        <Header>
          <Body>
            <Title>My App!</Title>
          </Body>
        </Header>
        <Content>
          <Text>Mi primera app! :)</Text>
          <Button dark onPress={() => this.props.navigation.push('About')}>
            <Text>Navegar al about screen</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen
