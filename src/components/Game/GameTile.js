import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "@styles/main";

const GameTile = ({ color, index, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.gameScreenBoardCellView, { backgroundColor: color }]}>
        <Text style={styles.gameScreenTextBoardCell}>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameTile;