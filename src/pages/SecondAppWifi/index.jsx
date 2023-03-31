import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import WifiManager from "react-native-wifi-reborn";

export default function SecondAppWiFi() {
  console.log(new Date().toLocaleTimeString(), SecondAppWiFi.name);

  const [wifiInfo, setWifiInfo] = useState("");
  const [hotspotInfo, setHotspotInfo] = useState("");
  const [wifiList, setWifiList] = useState("");

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

  const getAllWifiInfo = async () => {
    try {
      const wifiList = await WifiManager.loadWifiList();
      setWifiList(wifiList);
      const networks = wifiList.map((network) => ({
        SSID: network.SSID,
        BSSID: network.BSSID,
        capabilities: network.capabilities,
        frequency: network.frequency,
        level: network.level,
        timestamp: network.timestamp,
      }));
      console.log(networks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>{wifiInfo || "Nothing here"}</Text>
      <Button onPress={getCurrentWifiInfo} title="Get Current WiFi Info" />
      <Text>{hotspotInfo || "Nothing here"}</Text>
      <Button onPress={getHotspotInfo} title="Get Hotspot Info" />
      <Text>{JSON.stringify(wifiList) || "Nothing here"}</Text>
      <Button title="Get All WiFi Info" onPress={getAllWifiInfo} />
    </View>
  );
}
