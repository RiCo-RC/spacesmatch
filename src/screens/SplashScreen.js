import { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";
// import { initDatabase } from "@utils";

import { checkAuthentification } from "@utils";
import { CustomIcon, ProgressBar } from "@components";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkAuthentification(navigation);
    // initDatabase(); 
  }, [navigation]);

  return (
    <View style={[styles.screenBase, styles.screenFull, styles.bgc_darkSpace]}>
      <CustomIcon
        buttonType="custom"
        icon="loading"
        style={[styles.imageLogo]}
      />
      <Text style={styles.textLoading}>Loading...</Text>
      <ProgressBar />
    </View>
  );
};

export default SplashScreen;
