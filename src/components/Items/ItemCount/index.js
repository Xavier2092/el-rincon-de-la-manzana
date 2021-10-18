//ESTE ES EL CONTADOR DEL CARRITO DE COMPRAS: 
import { useState } from "react";

const ItemCount = (props) => {
    const { product, onAdd } = props;
    const [count, setCount] = useState(0);
    const agregar = () => onAdd(product);
    const counter = () => setCount(count + 1);
    
    return (
        <div className="row">
            <button id="btnAdd" onClick={() => {
                agregar();
                counter();
                }} className="btn btn-info" disabled={count === product.stock}>Agregar al carrito</button>
        </div>
    );    
};

export default ItemCount;