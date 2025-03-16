import { View } from "react-native";

import styles from "@styles/main";

import { CustomButtonIcon } from "@components";

const GameAction = ({ navigation }) => {
  return (
    <View style={[styles.viewBase, styles.gameScreenActionView]}>
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="shuffle-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={null}
      />
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="pause-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={null}
      />
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="help-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={null}
      />
    </View>
  );
};

export default GameAction;
