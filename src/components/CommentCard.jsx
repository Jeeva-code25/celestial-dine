import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './CommentCard.css'

const CommentCard = ({title, desc, user}) => {
  return (
    <Col className="comment-card p-4 rounded-3" md={3}>
        <h4 className="comment-title">{title}</h4>
        <p className="comment-desc">{desc}</p>
        <hr />
        <Row className='align-items-center '>
            <Col xs={3}>
            <Image src={user.img} alt="" className="user-img" fluid />
            </Col>
            <Col xs={6} className="user-info " >
                <p className="user-name mb-1">{user.name}</p>
                <p className="user-address mb-0">{user.address}</p>
            </Col >
        </Row>
    </Col>
  )
}

export default CommentCard