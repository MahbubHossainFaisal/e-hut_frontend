import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'
const Notification = (props) => {
   
    return (
        <div>
            <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                <NavLink to='/login' className='btn btn-primary mx-2'>Okay</NavLink>
                <NavLink to='/home' className='btn btn-primary'>Cancel</NavLink>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Notification
