import TopBar from "./Topbar";
import MainNav from "./Mainnav";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <TopBar />
      <MainNav />
    </header>
  );
}