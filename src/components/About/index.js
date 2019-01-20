import React, { Component } from "react";
import { Image } from "react-native";
import {
  Text,
  Container,
  Header,
  Body,
  Title,
  Content,
  Icon,
  Left,
  Right
} from "native-base";
import Styles from "./styles";

export default class AboutScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon type="Ionicons" name="md-settings" style={Styles.icon} />
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content contentContainerStyle={Styles.content}>
          <Image
            style={Styles.image}
            source={require("../../images/circle.png")}
          />
          <Text style={Styles.noSalesData}>No Sales Data Yet in</Text>
          <Text style={Styles.contentData}>
            Lorem ipsum its not here yet, but stay tuned. In the future you will
            be able to see your daily sales, pay period sales and YTD.
          </Text>
        </Content>
      </Container>
    );
  }
}
