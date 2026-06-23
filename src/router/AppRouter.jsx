import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import GamePage from "../pages/Games/GamePage";
import GameDetails from "../pages/Games/GameDetail";
import Contact from "../pages/Contact/Contact";
import Explore from "../pages/Explore/Explore";


export default function AppRouter() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

       <Route
          path="/games-activity-for-event/"
          element={<GamePage />}
        />

        <Route
            path="/:slug"
            element={<GameDetails />}
        />

        
        <Route path="/contact" element={<Contact />} />

        <Route path="/explore" element={<Explore />} />

      </Routes>

    </BrowserRouter>
  );
}