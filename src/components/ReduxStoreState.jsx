import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ReduxStoreState() {
  const latestReduxStoreState = useSelector((state) => state);

  return (
    <View>
      <Text>Latest Redux Store State</Text>
      <Text>{JSON.stringify(latestReduxStoreState)}</Text>
    </View>
  );
}
