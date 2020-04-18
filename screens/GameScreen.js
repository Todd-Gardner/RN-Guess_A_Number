import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Header from "../components/Header";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const getRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min; //rand ((0-1) * (99-1)) + 1
  if (randNum === exclude) {
    return getRandomBetween(min, max, exclude); //recursion
  } else {
    return randNum; // need else?
  }
};

const GameScreen = (props) => {
  const [guess, setGuess] = useState(
    getRandomBetween(1, 100, props.userChoice)
  );

  const onHigherHandler = () => {
    min = guess;
  };

  const onLowerHandler = () => {

  };

    //<Header title="Game on!" />
  return (
    <View style={styles.screen}>
      <Text>Computer's guess:</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onpress={() => {onHigherHandler}} />
        <Button title="HIGHER" onpress={() => {onLowerHandler}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",//between
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
