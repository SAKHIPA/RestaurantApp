import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restaurants from './Restaurants'



function Home() {
    const [hotels, setHotels] = useState([])
    const [value, setValue] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            await fetch("/restaurants.json")
                .then(res => res.json())
                .then(data => {
                    setHotels(data.restaurants)
                })
        }
        fetchData();
    }, [])
    console.log("data is", hotels);

    return (
        <Row>
            <input value={value}
                placeholder="Enter location"
                type="text"
                onChange={e => setValue(e.target.value)} />


            {hotels ?
                (hotels.filter(item=>{
                    if(value===""){
                        return item
                    }
                    else if(item.neighborhood.toLowerCase().includes(value)){
                        return item
                    }
                }))
            .map(item=>(
            <Col sm={12} md={8} lg={4}>
                <Restaurants data={item} /></Col>
            )):"error"}

        </Row>
    )
}

export default Home
