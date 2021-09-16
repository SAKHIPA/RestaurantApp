import React from 'react'
import {Card} from 'react-bootstrap'

function Restaurants({data}) {
    return (
        <Card className="my-3 p-3" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={data.photograph}/>
  <Card.Body>
    <Card.Title><h4>{data.name}</h4></Card.Title>
    <Card.Text>
      <p><strong>Cusion:</strong>{data.cuisine_type}</p>
    </Card.Text>
    <Card.Text>
      <p><strong>Address:</strong>{data.address}</p>
    </Card.Text>
    <Card.Text>
      <p><strong>Neighborhood:</strong>{data.neighborhood}</p>
    </Card.Text>

  </Card.Body>
</Card>
            
    )
}

export default Restaurants
