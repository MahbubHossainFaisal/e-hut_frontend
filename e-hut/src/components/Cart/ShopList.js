import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CartContext from '../store/cart-context'
const ShopList = (props) => {
    const [shops,setShops] = useState([])
    const [clicked,setClicked] = useState('Select')
   
    const cartCtx = useContext(CartContext)
    const [select,setSelect] = useState(false)
   

    useEffect(() =>{

      const getShop =async () =>{
	  await axios
      .get("https://localhost:44390/api/Shops")
      .then((response) => {
		  let arr = response.data;
         // console.log('arr: ',arr)
          setShops(arr)
      })
      .catch((err) => {
        //  console.log('Hi')
        console.log(err);
      });
	  
      
     if(localStorage.getItem('shopsCounter')){
        //console.log('entered')
         let arr = JSON.parse(localStorage.getItem('shopsCounter'))
         //console.log('arr',arr)
         arr.map(item =>{
            //  console.log('props',props.shopID)
            //   console.log('item',item)
             if(item === props.shopID) {
                
                 setSelect(true)
                 setClicked('Selected')
             }
         })
     }

	}
	getShop();


     

  
    },[])
    
     

    //console.log(shops)
    const shop = shops.filter(item => item.ShopId === props.shopID)
    //console.log(shop)
    let userID = JSON.parse(localStorage.getItem('user'));
    //console.log(userID.UserId)
    const selectShopHandler = () =>{
        props.selectedShop({
            customerId: userID.UserId,
            shopId: props.shopID,
            discountId: 1,
           products:[{
               ProductId: props.productId,
               Price: props.productPrice,
               Quantity: props.productAmount
           }]
        })
        
        if(localStorage.getItem('shopsCounter')){
            let arr = JSON.parse(localStorage.getItem('shopsCounter'))
            arr = [...arr, props.shopID]
            //console.log('arr',arr);
            localStorage.setItem('shopsCounter',JSON.stringify(arr))
        }
        else{
            let arr = [props.shopID]
            localStorage.setItem('shopsCounter',JSON.stringify(arr))
        }
     
        cartCtx.addShop(1)
        setClicked('Selected')
        setSelect(true)
       // console.log('shopList',cartCtx.items)
        cartCtx.removeShops(props.shopID,props.productId)
         
    }

     
       
     
   
   
    return (
        
        <Card className='m-2' style={{ width: '12rem', position:'relative' }}>
        
        <Card.Body>
            {shop.length!==0 && <Card.Title>{shop[0].Name}
            </Card.Title>}
            {/*<Card.Img variant='top'  src={shopImage} height='60' width='40'/> */}
            <Card.Text>
                Product: <h6>{props.product}</h6>
            </Card.Text>
            <Button variant='primary' className='btn-sm' onClick={selectShopHandler} disabled={select ? true: false}>{clicked}</Button>
        </Card.Body>
        </Card>
        
    )
}

export default ShopList
