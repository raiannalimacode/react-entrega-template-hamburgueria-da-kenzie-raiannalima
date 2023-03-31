import { Card } from "../card"

import { StylizedProductsList } from "./style"

export const ProductsList = ({productsList, addProductCart, searchProducts, search, setSearch}) => {
    const currentProductList = search !== "" ? searchProducts : productsList;
    
    return (
        <StylizedProductsList>
            <ul>
                {currentProductList.map(product => (
                    <Card key={product.id} product={product} addProductCart={addProductCart}/>
                ))}
            </ul>
        </StylizedProductsList>
    )
}