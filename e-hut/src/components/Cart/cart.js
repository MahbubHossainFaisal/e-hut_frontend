import React, { useContext } from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Checkout from '../Checkout/checkout'
import CartContext from '../store/cart-context'
import classes from './cart.module.css'


const CartScreen = () => {
   
    
    
    const history = useHistory()
    const cartCtx = useContext(CartContext)
   // console.log(cartCtx.items)
   const totalAmount = cartCtx.totalAmount.toFixed(2)
   const cartItemAddHandler = (item) =>{
        console.log(item)
        cartCtx.addItem({
            id: item.id,
            image:'https://freepngimg.com/thumb/categories/291.png',
            name: item.name,
            amount: 1,
            price: item.price
                                    
        })
   }
  
   const cartItemRemoveHandler = id =>{
     //  console.log(id)
        cartCtx.removeItem(id)
   }

   const cartItemFullyRemoveHandler = id =>{
        cartCtx.removeItemFully(id)
   }


   const checkoutHandler = () =>{
       let userID = JSON.parse(localStorage.getItem('user'));
       //console.log(totalAmount)
        userID = {...userID, subtotal: totalAmount ? totalAmount : 0, discount: 20,}
       history.push({
           pathname: '/checkout',
           state: userID
       })
   }
    return (
        <div className={classes.cart}>
            <Row>
            <Col md={1}>

            </Col>
            <Col md={6} className=''>
            <h1>Shopping Cart</h1>
            {cartCtx.items.length === 0 ?  'Your cart is empty!'  : (
                <ListGroup variant='flush'>
                    {cartCtx.items.map(item =>(
                        <ListGroupItem key={item.id}>
                        <Row className='bg-light py-2'>
                            <Col md={1}>
                            </Col>
                            <Col md={1}>
                                <Image src={item.image} alt={item.name} fluid rounded />
                            </Col>
                            <Col md={2}>
                                <span className='p-2'>{item.name}</span>
                            </Col>
                            <Col md={2}>
                                <span className='p-2'>Price {item.price}৳</span>
                            </Col>
                            <Col md={3}>
                               <span className='p-2'>Amount </span> 
                               <button className={classes.minus} onClick={cartItemRemoveHandler.bind(null,item.id)}>-</button> 
                               <span className='p-2'> {item.amount}</span> 
                               <button className={classes.plus} onClick={cartItemAddHandler.bind(null,item)}>+</button>
                            </Col>
                            <Col md={2}>
                                <Button type='button' variant='light' onClick={cartItemFullyRemoveHandler.bind(null,item.id)}>
                                    <span className='p-2'><i className='fas fa-trash'></i></span>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    ))}
                    
                </ListGroup>
                
            ) }
            </Col>
            <Col md={4} className='py-5 my-2'>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                         <h2> Subtotal  items </h2>
                         <h3>{totalAmount} BDT.</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type='button' className='btn-block' onClick={checkoutHandler}
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
