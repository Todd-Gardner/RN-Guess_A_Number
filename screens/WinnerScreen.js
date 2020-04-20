import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
//import fireworks from '../assets/fireworks.gif'
const fireworks = require("../assets/fireworks.gif");

const WinnerScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <ImageBackground
          source={fireworks}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.insideCard}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Text style={styles.text}>
                Got it! Your number was {props.userNumber}.
              </Text>
              <Text style={styles.text}>
                It only took me {props.guessCount} guesses!
              </Text>
              <Button
                title="Play again?"
                onPress={props.onRestart}
                color={Colors.accent}
              />
            </View>
          </View>
        </ImageBackground>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  insideCard: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default WinnerScreen;
