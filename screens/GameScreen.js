import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import WinnerScreen from "./WinnerScreen"; // used to display at the same time

const getRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min; //rand ((0-1) * (99-1)) + 1
  if (randNum === exclude) {
    return getRandomBetween(min, max, exclude); //recursion
  } else {
    return randNum; //don't need else
  }
};

const GameScreen = (props) => {
  const [guess, setGuess] = useState(
    getRandomBetween(1, 100, props.userChoice)
  );
  const [guessCount, setGuessCount] = useState(1); // or useRef(1) ?
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (guess === userChoice) {
      onGameOver(guessCount);
    }
  }, [guess, userChoice, onGameOver]);

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
    setGuessCount((guessCount) => guessCount + 1);
  };

  //Maybe change header title to 'Game on!'
  return (
    <View style={styles.screen}>
      <Text>Computer's guess:</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            nextGuessHandler("lower");
          }}
        />
        <Button
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, "higher")}
        />
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
    justifyContent: "space-between", //around
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
