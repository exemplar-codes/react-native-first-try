import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store/reducers/counter";
import { countSelector } from "../store/selectors/counter";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Add" onPress={() => dispatch(addCount())} />
      <Text>{count}</Text>
    </View>
  );
}
