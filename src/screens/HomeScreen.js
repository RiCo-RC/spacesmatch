import { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";

import {
  HomeHeader,
  HomeLatestScore,
  CustomButtonIconAndText,
} from "@components";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.screenBase, styles.screenFull, styles.screenHome, styles.bgc_darkSpace]}>
      <HomeHeader />
      <HomeLatestScore />
      <CustomButtonIconAndText
        type="primary"
        buttonIconType = "ionicon"
        icon="play-circle"
        iconSize={30}
        iconColor="white"
        onPress={null}
        disabled={false}
        textStyle={styles.buttonTextHomeReady}
      >
        Ready to play!
      </CustomButtonIconAndText>
    </View>
  );
};

export default HomeScreen;
