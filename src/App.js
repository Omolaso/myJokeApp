import { Suspense } from "react";
import Jokes from "./components/Jokes";
import Spinner from "./components/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Jokes />
    </Suspense>
  );
}

export default App;
