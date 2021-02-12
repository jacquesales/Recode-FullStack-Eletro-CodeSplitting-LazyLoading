import "./App.css";
import { lazy, Suspense } from "react";

const Slogan = lazy(() => import("./code-splitting/Slogan"));
const Rodape = lazy(() => import("./code-splitting/Rodape"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p></p>}>
          
        </Suspense>

        <Suspense fallback={<p></p>}>
          <Slogan />
        </Suspense>

        <Suspense fallback={<p></p>}>
          <Rodape />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
