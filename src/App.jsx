import { useState, useEffect } from 'react'
import { Header } from './components/header/index.jsx';
import { ProductsList } from './components/productsList';
import { GlobalStyle } from './styles/global';
import { Cart } from './components/cart';
import { StylizedContainerMain } from './styles/app';
import { api } from './services/api.js';

function App() {
  const productLocalStorage = localStorage.getItem('@productCart');
  const [productsList, setProductsList] = useState([]);
  const [productsCart, setProductsCart] = useState(productLocalStorage ? JSON.parse(productLocalStorage) : []);
  const [search, setSearch] = useState("");

  const searchProducts = productsList.filter((actualProduct) => 
  actualProduct.name.toLowerCase().includes(search.toLowerCase()) ||
  actualProduct.category.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    localStorage.setItem('@productCart', JSON.stringify(productsCart));
  }, [productsCart])

  const addProductCart = (product) => {
    if (!productsCart.some(productCart => productCart.id === product.id)) {
      const listCartProducts = [...productsCart, product];
      setProductsCart(listCartProducts);
    } else {
      console.log("Este item já está na lista.")
    }
  }

  const removeProductCart = (productId) => {
    const newListCartProducts = productsCart.filter(product => product.id !== productId)
    setProductsCart(newListCartProducts);
  }

  const removeAllProductsCart = () => {
    const newProductsCart = [];
    setProductsCart(newProductsCart);
  }

  const loadProducts = async () => {
    try {
      const response = await api.get('products');
      setProductsList(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProducts()
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <Header setSearch={setSearch}/>
      <StylizedContainerMain>
        <ProductsList productsList={productsList} addProductCart={addProductCart} searchProducts={searchProducts} search={search} setSearch={setSearch}/>
        <Cart productsCart={productsCart} removeProductCart={removeProductCart} removeAllProductsCart={removeAllProductsCart}/>
      </StylizedContainerMain>
    </div>
  )
}

export default App
