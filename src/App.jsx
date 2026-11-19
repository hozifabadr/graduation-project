
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./welcome";
import Login from "./login";
import RoleSelection from "./roleselection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/roleselection"
          element={<RoleSelection />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
