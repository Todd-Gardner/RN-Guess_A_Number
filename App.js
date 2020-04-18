import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import Gamescreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
/* - Changed this to terniary expression below - 
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <Gamescreen userChoice={userNumber} />;
  } */

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {userNumber ? 
        <Gamescreen userChoice={userNumber} />
       : 
        <StartGameScreen onStartGame={startGameHandler} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
