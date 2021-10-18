//Va a mostrar los productos disponibles para la compra

import Item from "../Item";

const ItemListContainer = (props)=> {
    const { products, onAdd } = props;
    return (
        <div className="row col-xl-8 col-lg-8 col-md-12">
            <div className="nav justify-content-center">
                <div>
                    <h2>Productos disponibles:</h2>
                </div>
                <div className="row">
                    {products.map((product)=>(
                        <Item key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default ItemListContainer;