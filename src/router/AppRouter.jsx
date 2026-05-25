import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import GamePage from "../pages/Games/GamePage";
import GameDetails from "../pages/Games/GameDetail";

export default function AppRouter() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

       <Route
          path="/games-activity-for-event"
          element={<GamePage />}
        />

        <Route
            path="/:slug"
            element={<GameDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}