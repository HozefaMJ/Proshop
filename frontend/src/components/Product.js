import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'


import Rating from './Rating';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div"  variant='top'>
                    <strong>
                        {product.name}
                    </strong>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color="gold"/>
            </Card.Text>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

Rating.propTypes = {
    value: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    color: propTypes.string,
}

export default Product
