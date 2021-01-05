import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Row,Col } from 'react-bootstrap'
//import axios from 'axios';
// Custom Components
import Product from '../components/Product';
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
// Actions
import { listProducts } from "../actions/productActions";
import ProductCarousal from '../components/ProductCarousal';

// Dummy Data File
//import products from '../products'

const HomeScreen = ({match}) => {

    /*
    For Component Level State
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])
    */

    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    // Through Reducer App Level State
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading,error,products,pages,page} = productList


    useEffect(()=>{
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    

    return (
        <>
        {!keyword && <ProductCarousal/>}
          <h1>Latest products</h1>
          {loading ? (
            <Loader/>
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
            <Row>  
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}     
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""}/>
            </> 
          )}
           
        </>
    )
}

export default HomeScreen
