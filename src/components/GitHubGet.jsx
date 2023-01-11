import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, resetData } from "../store/reducers/githubGet";
import {
  loadingSelector,
  errorSelector,
  dataSelector,
} from "../store/selectors/githubGet";

export default function GitHubGet() {
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const data = useSelector(dataSelector);

  const dispatch = useDispatch();
  const getDataHandler = async () => dispatch(fetchData());
  const resetDataHandler = async () => dispatch(resetData());

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button title="Get data" onPress={getDataHandler} disabled={loading} />
        <Button
          title="Clear"
          onPress={resetDataHandler}
          disabled={loading || !data}
        />
      </View>
      {loading && <Text>Loading...</Text>}
      {!loading && error && <Text>{JSON.stringify(loading)}</Text>}
      {!loading && !error && (
        <Text>
          {JSON.stringify(
            data &&
              Object.entries(data).filter(([k]) =>
                ["id", "avatar_url", "login"].includes(k)
              )
          )}
        </Text>
      )}
    </View>
  );
}
