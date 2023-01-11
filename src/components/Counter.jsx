import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="Add" onPress={() => setCount((_) => _ + 1)} />
      <Text>{count}</Text>
    </View>
  );
}
