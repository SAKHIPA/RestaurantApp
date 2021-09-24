import React, { useState, useEffect } from 'react'
import {Row,Col,Image,Card,ListGroup} from 'react-bootstrap'
import { Router } from 'react-router'
import Rating from './Rating'

function RestaurantDetails({ match }) {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then(res => res.json())
                .then(data => {
                    setData(data.restaurants)
                })

        }
        fetchData();

    }, [])

    // console.log("my data is", data);


    const details = data.find((i) => i.id == match.params.id)
    //console.log("New details", details);
    return (
        <>
            {details?(
                <Row className="my-3">
                <Col md={3}>
                <Image className="img" src={details.photograph} alt={details.name}fluid/></Col>

                <Col>
            <ListGroup.Item>
                <h2>{details.name}</h2>
                <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Cuisine:{details.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
                <p>Address:{details.address}</p>
            </ListGroup.Item>

        
            </Col>

            <Col>
            <ListGroup.Item>
                <h6>Operating Hours:</h6>
                <p>Monday:{details.operating_hours.Monday}</p>
                <p>Tuesday:{details.operating_hours.Tuesday}</p>
                <p>Wednesday:{details.operating_hours.Wednesday}</p>
                <p>Thursday:{details.operating_hours.Thursday}</p>
                <p>Friday:{details.operating_hours.Friday}</p>
                <p>Saturday:{details.operating_hours.Saturday}</p>
                <p>Sunday:{details.operating_hours.Sunday}</p>

                
                </ListGroup.Item>
                </Col>
                <Row><Card>
                    <Rating data={details.reviews}/>
                    </Card></Row>
                </Row>
            ):"error"}

            
        </>
    )
}

export default RestaurantDetails
