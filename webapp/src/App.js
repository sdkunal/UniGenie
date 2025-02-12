import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Anim from "./components/Anim.tsx";
import Icon from "./components/Icon.jsx";
import Navigation from "./components/Navigation";
import Navigation_nonMain from "./components/Navigation_nonMain";
import ProfilePage from "./components/ProfilePage";
import ProfileSettingsPage from "./components/ProfileSettingsPage";
import StudentHomePage from "./components/StudentHomePage";
import Footerx from "./components/Footerx";
import LP from "./components/Lp";
import Get from "./components/Get";
import Dashboard from "./components/Dashboard";
import MBA from "./components/MBA";
import CS from "./components/CS";
import Mech from "./components/Mech";
import US from "./components/US";
import UK from "./components/UK";
import Canada from "./components/Canada";
import Explore from "./components/Explore";

function App() {
  const rootElement = document.getElementById("root");
  const image = document.getElementById("image");
  const text = document.getElementById("text");
  const login = document.getElementById("login");
  const foot = document.getElementById("foot");
  var wind = window.location.href;

  if (wind === "http://localhost:3000/") {
    return (
      ReactDOM.render(
        <StrictMode>
          <Navigation />
          <Router>
            <Routes>
              
              <Route path="/UK" element={<UK />} />
              <Route path="/US" element={<US />} />
              <Route path="/Canada" element={<Canada />} />
              <Route path="/CS" element={<CS />} />
              <Route path="/Mech" element={<Mech />} />
              <Route path="/MBA" element={<MBA />} />
              <Route path="/Explore" element={<Explore/>}/>
            </Routes>
          </Router>
        </StrictMode>,
        rootElement
      ),
      ReactDOM.render(
        <StrictMode>
          <Icon />
        </StrictMode>,
        image
      ),
      ReactDOM.render(
        <StrictMode>
          <Anim/>
        </StrictMode>,
        text
      ),
      ReactDOM.render(
        // if(!token) {
        //     return <Login setToken={setToken} />
        //   }
        <StrictMode>
          {/* if(!token){
                    <LP setToken={setToken}/>} */}
          <LP />
        </StrictMode>,
        login
      ),
      ReactDOM.render(
        <StrictMode>
          <Footerx />
        </StrictMode>,
        foot
      )
    );
  } else {
    return (
      ReactDOM.render(
        <StrictMode>
          <Navigation_nonMain />
          <Router>
            <Routes>
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route
                path="/ProfileSettingsPage"
                element={<ProfileSettingsPage />}
              />
              <Route path="/StudentHomePage" element={<StudentHomePage />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/UK" element={<UK />} />
              <Route path="/US" element={<US />} />
              <Route path="/Canada" element={<Canada />} />
              <Route path="/CS" element={<CS />} />
              <Route path="/Mech" element={<Mech />} />
              <Route path="/MBA" element={<MBA />} />
              <Route path="/Explore" element={<Explore/>}/>
            </Routes>
          </Router>
        </StrictMode>,
        rootElement
      ),
      ReactDOM.render(
        <StrictMode>
          <Footerx />
        </StrictMode>,
        foot
      )
    );
  }
}
export default App;
