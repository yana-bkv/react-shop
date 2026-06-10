import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Products.module.css'

interface ProductCardProps {
    id: number,
    title: string,
    description: string,
    img: string,
    addToCart: (id:number) => void,
    removeFromCart: (id: number) => void,
    isInCart: boolean
}

function ProductCard({ title, description, img, id, addToCart, removeFromCart, isInCart}: ProductCardProps) {
    return (
        <Card className={classes.productCard} style={{ width: '18rem' }}>
            <Card.Img className={classes.productCardImage}  variant="top" src={img} />
            <Card.Body className={classes.productCardBody}>
                <Card.Title className={classes.productCardTitle} >{title}</Card.Title>
                <Card.Text className={classes.productCardDescription}>
                    {description}
                </Card.Text>
                {
                    isInCart
                    ? <Button onClick={()=> removeFromCart(id)} variant="danger" className={classes.productButton}>Remove from cart</Button>
                    : <Button onClick={()=> addToCart(id)} variant="primary" className={classes.productButton}>Add to cart</Button>

            }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;