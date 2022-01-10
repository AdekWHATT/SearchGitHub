import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile"
import { Alert } from "./components/Alert";
import { AlertState } from "./context/Alert/alertState";
import { GitHubState } from "./context/GitHub/GitHubState";
function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert
              alert={{ text: "" }} />
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profile/:name" element={<Profile/>}/>
            </Routes>

          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
