import { View, Text } from "react-native";
import styles from "@styles/main";

import { VERSION } from "@utils/";

const HomeHeader = () => {
  return (
    <View style={[styles.screenBase, styles.screenHomeHeader]}>
      <Text style={styles.textHomeName}>Spaces Match</Text>
      <Text style={styles.textHomeVersion}>v{VERSION}</Text>
    </View>
  );
};

export default HomeHeader;