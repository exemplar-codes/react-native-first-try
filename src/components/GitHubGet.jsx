import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function GitHubGet() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(0);

  const getData = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://api.github.com/users/sanjarcode");
      const data = await resp.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
    }
  };

  return (
    <View>
      <Button title="Get data" onPress={getData} disabled={loading} />
      {loading && <Text>Loading...</Text>}
      {!loading && error && <Text>{JSON.stringify(loading)}</Text>}
      {!loading && !error && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
}
