import { StylizedCard } from "./style"

export const Card = ({product, addProductCart}) => {
    return (
        <StylizedCard>
            <div className="img-container">
                <img src={product.img}></img>
            </div>
            <div className="info-container">
                <h2 className="title-01">
                    {product.name}
                </h2>
                <span className="text-01">
                    {product.category}
                </span>
                <span className="text-02">
                    R$ {product.price}
                </span>
                <button type="button" className="btn-03" onClick={() => addProductCart(product)}>
                    Adicionar
                </button>
            </div>
        </StylizedCard>
    )
}
