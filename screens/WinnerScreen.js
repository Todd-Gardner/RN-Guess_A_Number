import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";

const WinnerScreen = (props) => {
  return (
    <View>
      <Card style={{ marginTop: 20 }}>
        <View>
          <Text>You got it! The number was {props.userNumber} - Congrats!</Text>
        </View>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text>It took {props.guessCount} guesses</Text>
        </View>
        <Button title="Play again?" onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WinnerScreen;
