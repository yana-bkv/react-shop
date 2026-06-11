import {createContext, type Dispatch, type SetStateAction} from "react";

export interface ProductCartContextData {
    productsIdsInCart: number[],
    setProductsIdsInCart: Dispatch<SetStateAction<number[]>>,
    addProductIdsToCart: (id: number) => void,
    removeProductIdsFromCart: (id: number) => void
}

export const ProductsCartContext = createContext<ProductCartContextData>({
    productsIdsInCart: [],
    setProductsIdsInCart: () => {},
    addProductIdsToCart: () => {},
    removeProductIdsFromCart: () => {}
});