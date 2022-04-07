import './App.css';
import "./Normalize.css"
import Sidebar
    from "./components/Sidebar/Sidebar";
import Main
    from "./components/Main/Main";

function App() {
  return (
    <div className={"page"}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
