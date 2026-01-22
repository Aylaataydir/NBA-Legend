import Card from "./Card.jsx"
import { data } from "../helper/data"
import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react"



const Main = ({ value }) => {


    const filtered = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))

    console.log(filtered)


    return (
        <Container className="rounded-2 mt-5 main d-flex justify-content-center">
            <Row className="p-5 ">

                {filtered.map((item, index) => {

                    return (

                        <Col className="mt-4" key={index} sm={12} md={6} lg={4} >
                            <Card {...item} />
                        </Col>

                    )
                })}

                {filtered.length === 0 && (
                    <div className="text-center w-100 mt-5">
                        <h3>No player found.</h3>
                    </div>
                )}

            </Row>
        </Container>
    )
}

export default Main