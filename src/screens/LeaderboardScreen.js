import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// import { LEADERBOARD_MAX } from "@utils";
import styles from "@styles/main";

// import { getLeaderboard } from "@utils";

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [leaderboard, setLeaderboard] = useState([]);

  // useEffect(() => {
  //   const fetchLeaderboard = async () => {
  //     const data = await getLeaderboard();
  //     setLeaderboard(data);
  //     console.log("Fetching latest score...");
  //   };
  //   fetchLeaderboard();
  // }, []);

  return (
    <View style={[styles.screenBase, styles.screenFull, styles.screenLeaderboard, styles.bgc_darkSpace]}>
      <View style={[styles.screenLeaderboardHeader]}>
        <Text style={[styles.textLeaderboardTitle]}>Leaderboard</Text>
      </View>
      <View style={[styles.screenLeaderboardContent]}>
        {/* <FlatList
          data={leaderboard.slice(0, LEADERBOARD_MAX)}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <CustomButton
              type="tertiary"
              style={[styles.buttonLeaderboard]}
              onPress={navigation.navigate("DetailsScreen", {
                username: item.username,
              })}
              disabled={false}
            >
              <Text style={[styles.textLeaderboardRank]}>{index + 1}</Text>
              <Text style={[styles.textLeaderboardUser]}>{item.username}</Text>
              <Text style={[styles.textLeaderboardScore]}>
                {item.bestScore}
              </Text>
            </CustomButton>
          )}
        /> */}
      </View>
    </View>
  );
};

export default LeaderboardScreen;
