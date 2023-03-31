import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import WifiManager from "react-native-wifi-reborn";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../../store/reducers/counter";
import { countSelector } from "../../store/selectors/counter";
import PermissionsComponent from "./PermissionsComponent";

export default function SecondAppWiFi() {
  const [wifiInfo, setWifiInfo] = useState("");
  const [hotspotInfo, setHotspotInfo] = useState("");
  const [_count, setCount] = useState(0);

  const getCurrentWifiInfo = async () => {
    setCount((_) => (_ += 1));
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
      <Text>{wifiInfo || "Nothing here123" + _count}</Text>
      <Button onPress={getCurrentWifiInfo} title="Get Current WiFi Info" />
      <Text>{hotspotInfo || "Nothing here"}</Text>
      <Button onPress={getHotspotInfo} title="Get Hotspot Info" />
    </View>
  );
}
