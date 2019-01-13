import React, { Component } from 'react'
import { Text, Container, Header, Body, Title , Content} from 'native-base'

export default class AboutScreen extends Component {
  render() {
    return (
      <Container>
        <Header> 
          <Title>textInComponent</Title> 
        </Header>
        <Content>
          <Text>Este es mi AboutScreen</Text>
        </Content>
      </Container>
    )
  }
}
