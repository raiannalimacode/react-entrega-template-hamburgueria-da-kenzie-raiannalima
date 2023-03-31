import { StylizedCart } from "./style"

import exemple from "../../assets/exemple.png"

export const Cart = ({productsCart, removeProductCart, removeAllProductsCart}) => {
    const values = [];
    productsCart.forEach((product) => {
        const newValue = product.price;
        values.push(newValue);    
    });
    const initialValue = 0;
    const sum = values.reduce((acc, current) => acc + current, initialValue);

    return (
        <StylizedCart>
            <div className="cart-title">
                <h2 className="title-02">
                    Carrinho de compras
                </h2>
            </div>

            {productsCart.length === 0 
            ?
                <div className="cart-empty-bag">
                    <h4 className="title-01">
                        Sua sacola está vazia. 
                    </h4>
                    <p className="text-04">
                        Adicione itens
                    </p>
                </div>
            : 
            <>
                <ul>
                    {productsCart.map(product => (
                        <li key={product.id}>
                            <div className="cart-data">
                                <div className="cart-image">
                                    <img src={product.img}/>
                                </div>
                                <div className="cart-name">
                                    <h2 className="title-03">
                                        {product.name}
                                    </h2>
                                    <span className="text-01">
                                        {product.category}
                                    </span>
                                </div>    
                            </div>
                            <button type="button" className="btn-remove" onClick={() => removeProductCart(product.id)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="cart-total">
                    <div>
                        <h3 className="title-04">
                            Total
                        </h3>
                        <span className="text-03">
                            R$ {sum.toFixed(2)}
                        </span>
                    </div>
                    <button className="btn-remove-all" onClick={() => removeAllProductsCart()}>
                        Remover todos
                    </button>
                </div>  
            </> 
            }   
        </StylizedCart>
    )
}