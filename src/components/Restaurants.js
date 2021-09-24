import React from 'react'
import {Card} from 'react-bootstrap'
import{Link} from  'react-router-dom'

function Restaurants({data}) {
    return (
      <Link to={`restaurants/${data.id}`}>
        <Card className="my-3 p-3" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={data.photograph}/>
  <Card.Body>
    <Card.Title><h3>{data.name}</h3></Card.Title>
    <Card.Text>
      <strong>Cusion:</strong>{data.cuisine_type}
    </Card.Text>
    <Card.Text>
      <strong>Neighborhood:</strong>{data.neighborhood}
    </Card.Text>

  </Card.Body>
</Card>
</Link>    
    )
}

export default Restaurants
