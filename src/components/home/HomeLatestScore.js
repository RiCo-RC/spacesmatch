import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import styles from "@styles/main";
import { getLatestScore } from "@database";

import CustomButtonIcon from "../CustomButtonIcon";

const HomeLatestScore = () => {
  const [latestScore, setLatestScore] = useState(null);

  // useEffect(() => {
    // const fetchLeatestScore = async () => {
    //   const data = await getLatestScore(setLatestScore);
    //   setLatestScore(data);
    //   console.log("Fetching latest score...");
    // };
    // fetchLeatestScore();
  // }, []);

  return (
    <View style={[styles.screenBase, styles.screenHomeLatestScore]}>
      <Text style={styles.textHomeLatestScoreTitle}>Latest score:</Text>
      {latestScore ? (
        <>
          <Text style={styles.textHomeLatestScoreResult}>
            {latestScore.score_points}
          </Text>
          <Text style={styles.textHomeLatestScoreResult}>
            {latestScore.user_username}
          </Text>
          <Text style={styles.textHomeLatestScoreResult}>
            {latestScore.score_registered_on}
          </Text>
        </>
      ) : (
        <Text style={styles.textHomeLatestScoreResult}>
          No scores available
        </Text>
      )}
      <CustomButtonIcon
        type="tertiary"
        buttonIconType="ionicon"
        icon="trophy"
        iconSize={32}
        iconColor="#FF4500"
        buttonStyle={styles.buttonHomeLatestScore}
        onPress={null}
        disabled={false}
      />
    </View>
  );
};

export default HomeLatestScore;
