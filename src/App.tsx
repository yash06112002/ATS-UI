import "./App.css";
import Nav2 from "./components/Nav2";
import Menu from "./components/Menu.tsx";
import MainContent from "./components/MainContent.tsx";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Menu />
      <Nav2 />
      <MainContent />
    </div>
  );
}

export default App;
