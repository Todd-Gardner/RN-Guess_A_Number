import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import Gamescreen from "./screens/GameScreen";
import WinnerScreen from "./screens/WinnerScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessCount, setGuessCount] = useState(0);

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessCount(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (guessCount) => {
    setGuessCount(guessCount);
  };

  // - Had this as terniary expression below (until third argument) -
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  
  // if there is a userNumber & have guesses - the game has started
  if (userNumber && guessCount <= 0) {
    content = (
      <Gamescreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  // or could have done (guess === userChoice)
  } else if (guessCount > 0) {
    content = (
      <WinnerScreen
        userNumber={userNumber}
        guessCount={guessCount}
        onRestart={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {/* {userNumber ? 
        <Gamescreen userChoice={userNumber} onPlayAgain={startGameHandler}/>
       : 
        <StartGameScreen onStartGame={startGameHandler} />
      } */}
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
