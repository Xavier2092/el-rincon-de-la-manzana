//LISTA DE PRODUCTOS Seleccionados. ESTA VA A SER LA CESTA

const ItemList = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    
    return (
        <div className="row col-xl-4 col-lg-4">
            <h2 className="row justify-content-center">Carrito de compras:</h2>
            <div>{cartItems.length === 0 && <p className="row justify-content-center">Aún no agrega productos al carrito</p>}</div>

            {cartItems.map((item) => (
                    <div key={item.id}>
                        <div className="nav justify-content-center"><h5>{item.title}</h5></div>
                        <div className="nav justify-content-center"> 
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                            <input type="number" value={item.cantidad} disabled />
                            <button onClick={() => onAdd(item)}  className="add" disabled={item.cantidad === item.stock} >+</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ItemList;