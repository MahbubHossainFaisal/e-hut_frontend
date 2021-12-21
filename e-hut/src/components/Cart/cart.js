import React from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import classes from './cart.module.css'


const CartScreen = ({match, location, history}) => {
    let cartItems = [{image:'https://freepngimg.com/thumb/categories/291.png',name:'cocacola', price:50,amount:3,},
                    {image:'https://freepngimg.com/thumb/categories/291.png',name:'cocacola', price:50,amount:3,}]
    
    return (
        <div className={classes.cart}>
            <Row>
            <Col md={7}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ?  'Your cart is empty!'  : (
                <ListGroup variant='flush'>
                    {cartItems.map(item =>(
                        <ListGroupItem key={item.product}>
                        <Row className='bg-light py-2'>
                            <Col md={1}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col md={3}>
                                Name: {item.name}
                            </Col>
                            <Col md={2}>
                                Price: {item.price}৳
                            </Col>
                            <Col md={2}>
                                Amount: {item.amount}
                            </Col>
                            <Col md={2}>
                                <Button type='button' variant='light' >
                                    <i className='fas fa-trash'></i>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    ))}
                    
                </ListGroup>
                
            ) }
            </Col>
            <Col md={4} className='py-5 m-2'>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                         <h2> Subtotal  items </h2>
                         <h3>taka</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type='button' className='btn-block'
                            >Proceed to Checkout</Button>
                        </ListGroupItem>
                        </ListGroup>
                </Card>
             </Col>
        </Row>
        </div>
    )
}

export default CartScreen
