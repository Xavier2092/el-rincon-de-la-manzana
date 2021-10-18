import "./App.css";
import "./scss/App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Items/ItemListContainers";
import ItemList from "./components/Items/ItemList";
import data from './data/articles';
import { useState } from "react";


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((i) => i.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map((i) => 
          i.id === product.id ? {...exist, cantidad: exist.cantidad + 1} : i
        )
      );
    }else{
      setCartItems([...cartItems, {...product, cantidad: 1}])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((i) => i.id === product.id);
    if(exist.cantidad === 1){
      setCartItems(cartItems.filter((i) => i.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((i) => 
          i.id === product.id ? {...exist, cantidad: exist.cantidad -1 } : i
        )
      );
    }
  };

  return (
    <>
      <NavBar />
      <div className="nav">
        <ItemListContainer greeting="Hola JSX" 
          cartItems={cartItems} 
          products={products} 
          onAdd={onAdd} 
        />
        <ItemList 
          cartItems={cartItems} 
          onAdd={onAdd}
          onRemove={onRemove} />
      </div>
    </>
  )
  
}

export default App;
