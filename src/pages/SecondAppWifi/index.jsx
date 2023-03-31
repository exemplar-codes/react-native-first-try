import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import WifiManager from "react-native-wifi-reborn";

export default function SecondAppWiFi() {
  console.log(new Date().toLocaleTimeString(), SecondAppWiFi.name);

  const [wifiInfo, setWifiInfo] = useState("");
  const [hotspotInfo, setHotspotInfo] = useState("");

  const getCurrentWifiInfo = async () => {
    try {
      const ssid = await WifiManager.getCurrentWifiSSID();
      setWifiInfo(`Current WiFi SSID: ${ssid}`);
    } catch (error) {
      console.log("Error getting current WiFi information: ", error);
    }
  };

  const getHotspotInfo = async () => {
    try {
      const ssid = await WifiManager.getBSSID();
      setHotspotInfo(`Hotspot SSID: ${ssid}`);
    } catch (error) {
      console.log("Error getting hotspot information: ", error);
    }
  };

  return (
    <View>
      <Text>{wifiInfo || "Nothing here"}</Text>
      <Button onPress={getCurrentWifiInfo} title="Get Current WiFi Info" />
      <Text>{hotspotInfo || "Nothing here"}</Text>
      <Button onPress={getHotspotInfo} title="Get Hotspot Info" />
    </View>
  );
}
