//DETALLE DE CADA PRODUCTO ESPECIFICO SELECCIONADO
import ItemCount from "../ItemCount";

const Item = (props) => {
    const { product, onAdd } = props;
    return (
        <div className="row col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <img className="small" src={product.pictureURL} alt={product.title} />
            <div className="nav justify-content-center">    
                <h6>{product.title}</h6>
            </div>
            <div className="nav justify-content-center">
                <h5>${product.price}</h5>
            </div>
            <div>
                <h6>Disponibles: {product.stock}</h6>
            </div>
            <div>
               <ItemCount key={product.id} product={product} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default Item;
