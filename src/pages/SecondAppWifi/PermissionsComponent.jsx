import React, { useEffect } from "react";
import { PermissionsAndroid } from "react-native";
// Does not work, avoid use. Breaks other things
function PermissionsComponent({ onPermissionsGranted }) {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_WIFI_STATE,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      if (
        granted[PermissionsAndroid.PERMISSIONS.ACCESS_WIFI_STATE] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        (granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] ===
          PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] ===
            PermissionsAndroid.RESULTS.GRANTED)
      ) {
        console.log("Permissions granted");
        onPermissionsGranted(true);
      } else {
        console.log("Permissions denied");
        onPermissionsGranted(false);
      }
    } catch (error) {
      console.log("Error requesting permissions: ", error);
      onPermissionsGranted(false);
    }
  };

  return null;
}

export default PermissionsComponent;
