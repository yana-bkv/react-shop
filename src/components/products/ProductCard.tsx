import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Products.module.css'

interface ProductCardProps {
    title: string,
    description: string,
    img: string
}

function ProductCard({title, description, img}: ProductCardProps) {

    return (
        <Card className={classes.productCard} style={{ width: '18rem' }}>
            <Card.Img className={classes.productCardImage}  variant="top" src={img} />
            <Card.Body>
                <Card.Title className={classes.productCardTitle} >{title}</Card.Title>
                <Card.Text className={classes.productCardDescription}>
                    {description}
                </Card.Text>
                <Button variant="primary" className={classes.productButton}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;