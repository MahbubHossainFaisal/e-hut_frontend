import React, { useContext, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Notification from '../Notification/Card'
import CartContext from '../store/cart-context'
import classes from './cart.module.css'
import ShopList from './ShopList'


const CartScreen = () => {
   // localStorage.removeItem('shops')
    const [customer,setCustomer] = useState(true)
    let storageShops = 0;
    const[checkoutDetails,setCheckoutDetails] = useState([])
    const [shopCounter, setShopCounter] = useState(0)
    //localStorage.removeItem('shops')
    // let arr = ['Faisal','Borno']
    // localStorage.setItem('shops',JSON.stringify(arr))
    // let ans = JSON.parse(localStorage.getItem('shops'))
    // console.log(ans[0])
    const history = useHistory()
    const cartCtx = useContext(CartContext)
   // console.log(cartCtx.items)
   const totalAmount = cartCtx.totalAmount
    //console.log(cartCtx.items)

   const cartItemAddHandler = (item) =>{
        console.log(item.shopsId)
        cartCtx.addItem({
            id: item.id,
            shopsId: item.shopsId,
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
        setShopCounter(shopCounter-1)
   }


   const selectedShopsHandler = (shops) =>{
       let arr = checkoutDetails;
       let flag = false;
      
          arr.map((item) =>{
              
              if(item.shopId === shops.shopId){
                  flag = true;
                  item.products = [...item.products,...shops.products]
              }
              
          })
      if(flag === true){
          setCheckoutDetails(arr)
      }
      if(flag === false){
          arr.push(shops)
          setCheckoutDetails(arr)
      }
       
   }

  

   //console.log(checkoutDetails)
   const checkoutHandler = () =>{
       let userID = JSON.parse(localStorage.getItem('user'));
       //console.log(userID)
       if(userID === null || userID.Role !== 'Customer'){
           
           // console.log('HI')
           setCustomer(false)
       }
        else{
             
            userID = {...userID, subtotal: totalAmount ? totalAmount : 0, discount: 20, details: checkoutDetails.length > 0 ? checkoutDetails : []}
            // if(checkoutDetails.length > 0){
            // localStorage.setItem('orderDetails',JSON.stringify(checkoutDetails))
        
            // }
            history.push({
            pathname: '/checkout',
            state: userID
            })
        }
   }

   const counterShop = (count) =>{
        setShopCounter(shopCounter+count)
   }

// console.log('cartItems length: ', cartCtx.items.length)
// console.log('shop number: ', shopCounter)
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
                {customer && totalAmount!==0 &&(
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                         <h2> Subtotal  items </h2>
                         <h3>{totalAmount} BDT.</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                         <Button type='button' className='btn-block' disabled={cartCtx.items.length !== shopCounter ? true: false} onClick={checkoutHandler}
                            >Proceed to Checkout</Button>
                            
                        </ListGroupItem>
                        </ListGroup>
                    </Card>
                )}
                {!customer && totalAmount==='0' && <Notification  title='Notification' text='Please Login As a Customer'/>}
             </Col>
        </Row>
        <Row>
             <Col md={1}>

             </Col>
             
             <Col md={11}>
                 <h2>Select Shops</h2>
             </Col>     
        </Row>
        <Row>
            <Col md={1}>

             </Col>
           {cartCtx.items.map(item => item.shopsId.map(element => <ShopList counter={counterShop}  shopID={element} product={item.name} productId={item.id} productPrice={item.price} productAmount={item.amount}  selectedShop={selectedShopsHandler} />) )}
        </Row>
        
        </div>
    )
}

export default CartScreen
