
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../dataBooks/fantasy.json'


export default function AllTheBooks  () {
    return (
        <Row className="g-2 ">
            {fantasy.map((book) => {
                return (
                    <Col xs={12} md={4} lg={2} key={book.asin}>
                        <Card className="book-cover d-flex flex-column card-container">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Prezzo:{book.price}€</Card.Text>
                                <Card.Text>Category: {book.category}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}


/* import { Container, Col, Row } from 'react-bootstrap'
import fantasy from '../dataBooks/fantasy.json'
import SingleBook from './singleBook'

const AllTheBooks = () => {
return (
<Container>
<Row>
<Col> 
{fantasy.map((book,index) => (
    <SingleBook
    key = {'singlebook-${index}'}
    title= {book.title}
    img={book.img}
    price={book.price}
    category={book.category}
    asin={book.asin}
    />
))}
 </Col>
</Row>
</Container>
)
}

export default AllTheBooks; */