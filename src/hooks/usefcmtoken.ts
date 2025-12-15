import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

export const useFcmToken = () => {
  const [token, setToken] = useState("dummy-web-token");

  useEffect(() => {
    const getToken = async () => {
      if (Platform.OS === "web") {
        setToken("dummy-web-token");
        return;
      }

      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          setToken("permission-denied");
          return;
        }
      }

      const expoToken = (await Notifications.getExpoPushTokenAsync()).data;
      setToken(expoToken);
    };

    getToken();
  }, []);

  return token;
};
