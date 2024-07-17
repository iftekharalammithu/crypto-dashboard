import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Transaction from "./Pages/Transaction /Transaction";
import Support from "./Pages/Support/Support";
import Side_nav from "./Component/Side_nav";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <BrowserRouter>
          <Side_nav></Side_nav>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/transaction"
              element={<Transaction></Transaction>}
            ></Route>
            <Route path="support" element={<Support></Support>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
