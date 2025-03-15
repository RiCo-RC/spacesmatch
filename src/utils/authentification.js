import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkAuthentification = async (navigation) => {
  try {
    const userData = await AsyncStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null; 
    console.log("User data:", user);

    setTimeout(() => {
      if (user) {
        navigation.navigate("HomeScreen", { user });
      } else {
        navigation.navigate("HomeScreen");
      }
    }, 3100);
  } catch (error) {
    console.error("Error while retrieving user data:", error);
    navigation.navigate("HomeScreen");
  }
};