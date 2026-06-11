import {type JSX, type ReactNode, useState} from "react";
import { ProductsCartContext } from "./ProductsCartContext.tsx";

interface ProviderProps {
    children: ReactNode | JSX.Element,
}

const ProductsCartProvider = ({ children } : ProviderProps) => {
    const [productsIdsInCart, setProductsIdsInCart] = useState<number[]>([]);

    function addProductIdsToCart(id: number) {
        const isFoundId = productsIdsInCart.some(productId => productId === id);
        if (!isFoundId) {
            setProductsIdsInCart([...productsIdsInCart, id])
        }
    }

    function removeProductIdsFromCart(id: number) {
        setProductsIdsInCart(productsIdsInCart.filter(productId => productId !== id))
    }


    return (
        <ProductsCartContext.Provider value={{productsIdsInCart,setProductsIdsInCart,addProductIdsToCart,removeProductIdsFromCart}}>
            {children}
        </ProductsCartContext.Provider>
    );
};

export default ProductsCartProvider