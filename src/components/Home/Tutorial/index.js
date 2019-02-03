//import liraries
import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { BlurView } from "react-native-blur";

// create a component
class Tutorial extends Component {
  render() {
    return (
      <React.Fragment>
        {Platform.OS === "ios" && (
          <BlurView
            tint="light"
            intensity={50}
            style={StyleSheet.absoluteFill}
          />
        )}
        {Platform.OS === "ios" ? (
          <View style={styles.container}>
            <Text>Mi tutorial en iOS</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Text>Mi tutorial en Android</Text>
          </View>
        )}
      </React.Fragment>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      Platform.OS === "ios" ? "transparent" : "rgba(0, 0, 0, 0.5)"
  }
});

//make this component available to the app
export default Tutorial;
