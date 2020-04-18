import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  let winner;

  if (guess === props.userChoice) {
    console.log("you got it!");
    winner = (
      <View>
        <Text>You got it! the number was {guess} congrats!</Text>
        <Button title="Play again?" />
      </View>
    );
  }

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < props.userChoice) ||
      (direction === "higher" && guess > props.userChoice)
    ) {
      Alert.alert("Hey!!", "You know that isn't the right hint...", [
        { text: "busted!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = guess;
    } else {
      currentLow.current = guess;
    }
    const nextNumber = getRandomBetween(
      currentLow.current,
      currentHigh.current,
      guess
    );
    setGuess(nextNumber);
  };

  //<Header title="Game on!" />
  return (
    <View style={styles.screen}>
      <Text>Computer's guess:</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, "higher")}
        />
      </Card>
      {winner}
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
    justifyContent: "space-around", //between
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
