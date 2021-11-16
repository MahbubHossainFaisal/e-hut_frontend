import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pran from '../../images/pranup.jpg';

const ProductDetails = ({match}) => {
    const [product, setProduct] = useState({})

    useEffect(() =>{
        let id = match.params.id
        axios
      .get(`https://localhost:44390/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    return (
        <React.Fragment>
            <Link className='btn btn-success m-3' to='/'>
            Go Back
        </Link>
       
            <Row>
                <Col md={3}> </Col>
                <Col md={4} className='mb-5'>
                    <Image  src={Pran} alt='Pran Up' height='400' width='450'/>
                    {/* fluid will make the image to be inside the container and stop it from going outside of it. */}
                </Col>
                <Col md={3} className='my-5'>
                    <Card>
                        <ListGroupItem variant='flush'>
                            {/*flush variant takes away the spacing */}
                            <ListGroupItem>
                            <h3>{product.Name}</h3>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.Price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                            Description: {product.Details}
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.Status ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            
                            <ListGroupItem>
                                <Button className='btn-block btn-success'
                                    type='button' disabled={product.Status === false}
                                    >Add To Cart</Button>
                            </ListGroupItem>

                        </ListGroupItem>
                    </Card>
                </Col>
            </Row>
        
        </React.Fragment>
    )

}

export default ProductDetails
