import classes from './Products.module.css';
import ProductCard from "./ProductCard.tsx";
import {useContext, useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import {ProductsCartContext} from "../../context/cartContext/ProductsCartContext.tsx";
import type {ProductItem} from "./products.types.ts";

function ProductsList() {
    const [products, setProducts] = useState<ProductItem[]>([])
    const {productsIdsInCart, addProductIdsToCart, removeProductIdsFromCart } = useContext(ProductsCartContext)
    const [spinner, setSpinner] = useState<boolean>(false)

    console.table(products);
    console.log(productsIdsInCart);

    async function fetchData() {
        try {
            setSpinner(true)
            const res = await fetch('https://fakestoreapi.com/products')

            if (!res.ok) {
                console.error('HTTP error ', res.status)
                return
            }
            const data = await res.json() as ProductItem[]
            setProducts(data.map(p => ({...p, isInCart: false})))
        } catch (error) {
            console.error(error)
        } finally {
            setSpinner(false)
        }
    }

    useEffect(() => {
        void fetchData();
    }, [])


    function addToCart(id: number) {
        addProductIdsToCart(id)

        setProducts(products =>
            products.map(p =>
                p.id === id
                    ? { ...p, isInCart: true}
                    : p
            )
        )
    }

    function removeFromCart(id: number) {
        removeProductIdsFromCart(id)

        setProducts(products =>
            products.map(product =>
                product.id === id
                    ? { ...product, isInCart: false }
                    : product
            )
        );
    }


    return (
        <div className={classes.productsListContainer}>
            <h1 className={classes.title}>Products</h1>

            <div className={classes.cardsContainer}>
                {spinner
                    ? <div className={classes.spinnerContainer}><Spinner animation="border" /></div>
                    : products.map((p) => (
                        <ProductCard key={p.id} id={p.id} addToCart={addToCart} removeFromCart={removeFromCart} title={p.title} description={p.description} img={p.image} isInCart={p.isInCart}/>
                    ))
                }

            </div>
        </div>
    )
}

export default ProductsList