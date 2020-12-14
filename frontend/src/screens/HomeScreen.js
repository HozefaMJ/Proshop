import React, {useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import axios from 'axios';
// Custom Components
import Product from '../components/Product';

// Dummy Data File
//import products from '../products'

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>
          <h1>Latest products</h1>
          <Row>
            
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
           
          </Row>  
        </>
    )
}

export default HomeScreen