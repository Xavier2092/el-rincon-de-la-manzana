import "./App.css";
import "./scss/App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div>  
      <NavBar />
      <ItemListContainer greeting="Hola JSX" />
    </div>
  )
  
}

export default App;
