import Offcanvas from 'react-bootstrap/Offcanvas';
import {ProductsCartContext} from "../../context/cartContext/ProductsCartContext.tsx";
import {useContext, useEffect, useState} from "react";
import type {ProductItem} from "./products.types.ts";

interface ProductCartDrawerProps {
    open: boolean,
    handleClose: () => void
}

function ProductCartDrawer({ open, handleClose }: ProductCartDrawerProps) {
    const [cartProducts, setCartProducts] = useState<ProductItem[]>([])
    const { productsIdsInCart } = useContext(ProductsCartContext)

    async function fetchProductsFromCart(ids: number[]) {
        try {
            const promises: Promise<Response>[] = []
            const products: ProductItem[] = []

            ids.forEach((id) => {
                promises.push(fetch(`https://fakestoreapi.com/products/${id}`))
            })

            await Promise.all(promises).then(async (response) => {
                for (const res1 of response) {
                    const data = await res1.json()
                    products.push(data as ProductItem)
                }
            })

            setCartProducts(products)
        }
        catch (error) {
            console.log(error)
        }
    }

    console.log(cartProducts)

    useEffect(() => {
        if (open) {
            void fetchProductsFromCart(productsIdsInCart)
        }
    }, [productsIdsInCart, open]);

    return (
        <>
            <Offcanvas show={open} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chosen products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartProducts.map(product => <p>{product.title}</p>)
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ProductCartDrawer;