import { useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";

import styles from "@styles/main";

const ProgressBar = () => {
  const [progress] = useState(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false, // Ne supporte pas la largeur, donc `false`
    }).start();

    const progressListener = progress.addListener(({ value }) => {
      setPercentage(Math.round(value * 100));
    });

    return () => {
      progress.removeListener(progressListener);
    };
  }, [progress]);

  return (
    <View style={[styles.screenBase, styles.screenProgressBar]}>
      <Animated.View
        style={[
          styles.screenProgressBarAnimated,
          styles.bgc_interstellarGases,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      ></Animated.View>
      <Text style={[styles.TextprogressBar]}>
        {percentage}%
      </Text>
    </View>
  );
};

export default ProgressBar;
