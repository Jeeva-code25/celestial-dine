import React from 'react'
import CommentCard from './CommentCard'
import UserImg from '../assets/user.png'
import { Container, Row } from 'react-bootstrap'

const COMMENTS = [
    {
        title: "“The best restaurant”",
        desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        user: {
            'name': "Sophire Robson",
            'address': "Los Angeles, CA",
            'img': UserImg
        }
    },
    {
        title: "“Simply delicious”",
        desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        user: {
            'name': "Matt Cannon",
            'address': "San Diego, CA",
            'img': UserImg
        }
    },
    {
        title: "“One of a kind restaurant”",
        desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        user: {
            'name': "Andy Smith",
            'address': "San Francisco, CA",
            'img': UserImg
        },
    }
]
const Comments = () => {
    return (
        <Container fluid className="comments" style={{ padding: '4.5rem' }}>
            <h1 className="comments-title text-center mb-5" style={{ fontFamily: "Playfair Display" }}>What Our Customers Say</h1>
            <Row className='justify-content-center'>
                {
                    COMMENTS.map((cmt, index) => {
                        return (
                            <CommentCard key={index} title={cmt.title} desc={cmt.desc} user={cmt.user} />
                        )
                    })
                }
            </Row>

        </Container>
    )
}

export default Comments