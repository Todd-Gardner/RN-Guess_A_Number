import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    /* width: 300,
    maxWidth: "80%",
    alignItems: "center", 
    The below came from StartGameScreen inputContainer originally */
    padding: 10,
    elevation: 9,
    borderRadius: 10, // or individual
    backgroundColor: "white",
    // Below is for iOS only //
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});

export default Card;
