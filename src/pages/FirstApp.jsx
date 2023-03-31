import Counter from "../components/Counter"; // useState works
import GitHubGet from "../components/GitHubGet"; // fetch, useEffect works.
import ReduxStoreState from "../components/ReduxStoreState"; // Redux (RTK) works without issues

export default function FirstApp() {
  return (
    <>
      <ReduxStoreState />
      <Counter />
      <GitHubGet />
    </>
  );
}
