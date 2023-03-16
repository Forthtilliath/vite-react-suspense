import { Suspense } from "react";
import { Data } from "./features/Data";
import Card from "./features/Card";
import "./App.css";
import ErrorBoundary from "./features/error/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Card>
        <Suspense fallback="Loading users...">
          <Data type="Users" />
        </Suspense>
      </Card>

      <Card>
        <Suspense fallback="Loading posts...">
          <Data type="Posts" />
        </Suspense>
      </Card>

      <Card>
        <ErrorBoundary>
          <Suspense fallback="Loading albums...">
            <Data type="Albums" hasError  />
          </Suspense>
        </ErrorBoundary>
      </Card>
    </div>
  );
}

export default App;
