import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import GamePage from "../pages/Games/GamePage";
// import GameDetails from "../pages/Games/GameDetail";
import PageDetail from "../pages/PageDetail/PageDetail";
import ThemePage from "../pages/Themes/ThemePage";
import Contact from "../pages/Contact/Contact";


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
          path="/themes/"
          element={<ThemePage />}
        />

        <Route path="/boys-theme-party" element={<BoysTheme />} />

        <Route path="/girls-theme-party" element={<GirlsTheme />} />

        <Route
          path="/customized-theme-party"
          element={<CustomizedTheme />}
        />

        <Route path="/:slug" element={<PageDetail />} />
        
        <Route path="/contact" element={<Contact />} />


      </Routes>

    </BrowserRouter>
  );
}