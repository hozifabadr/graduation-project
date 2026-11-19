
import { HashRouter, Routes, Route } from "react-router-dom";

import Welcome from "./welcome";
import Login from "./login";
import RoleSelection from "./roleselection";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/roleselection"
          element={<RoleSelection />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
