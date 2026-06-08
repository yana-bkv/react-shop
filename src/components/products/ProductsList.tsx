import classes from './Products.module.css';
import ProductCard from "./ProductCard.tsx";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";

interface ProductItem {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string
}

function ProductsList() {
    const [products, setProducts] = useState<ProductItem[]>([])
    const [spinner, setSpinner] = useState<boolean>(false)

    async function fetchData() {
        try {
            const res = await fetch('https://api.escuelajs.co/api/v1/products')
            setSpinner(true)

            if (!res.ok) {
                throw new Error('HTTP error')
            }
            const data = await res.json() as ProductItem[]
            setProducts(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        } finally {
            setSpinner(false)
        }
    }

    useEffect(() => {
        void fetchData();
    }, [])

    return (
        <div className={classes.productsListContainer}>
            <h1 className={classes.title}>Products</h1>

            <div className={classes.cardsContainer}>
                {spinner
                    ? <div className={classes.spinnerContainer}><Spinner animation="border" /></div>
                    : products.map((p,index) => (
                        <ProductCard key={index} title={p.title} description={p.description} img={p.images} />
                    ))
                }

            </div>
        </div>
    )
}

export default ProductsList