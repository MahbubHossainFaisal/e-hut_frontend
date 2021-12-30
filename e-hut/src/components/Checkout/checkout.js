import React from 'react'
import { Badge, Card, Container, ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import classes from './checkout.module.css'

const Checkout = () => {
    return (
        <Container className={`${classes.center} my-5`}>
            <Card style={{ width: '46rem' }} className='text-center bg-dark text-white'>
            <Card.Header>Checkout</Card.Header>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Order ID</div>
                       
                    </div>
                    <Badge bg="secondary">
                     01
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Customer Name</div>
                    
                    </div>
                    <Badge bg="secondary">
                    Mahbub Hossain Faisal
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Date</div>
                    
                    </div>
                    <Badge bg="secondary">
                     12/02/2021
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Subtotal</div>
                    
                    </div>
                    <Badge bg="secondary">
                     200 BDT.
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Discount</div>
                    
                    </div>
                    <Badge bg="secondary">
                     50 BDT.
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Grand Total</div>
                    
                    </div>
                    <Badge bg="secondary">
                     150 BDT.
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Delivery Man</div>
                    
                    </div>
                    <Badge bg="secondary">
                     Alauddin Khan
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Delivery Status</div>
                    
                    </div>
                    <Badge bg="secondary">
                     On process
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant='primary' className='mx-2'>
                    Confirm
                    </Button>
                    <Button variant='primary' className='mx-2'>
                    Cancel
                    </Button>
                </ListGroup.Item>
                </ListGroup>
                

            </Card>
        </Container>
    )
}

export default Checkout
