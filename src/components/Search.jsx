

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../assets/nba-logo.png"
import { useState } from 'react';
import Main from './Main';

const Search = () => {

    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)

    return (
        <div className='container text-center mt-5 mb-5 '>
            <img src={logo} width={150} alt="" />
            <h1 className='mt-3'>NBA Legends</h1>
            <Form className='mt-3'>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control 
                    onChange={(e) => setInputValue(e.target.value) }
                     type="text" placeholder="Search Player..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Form>
            <Main value= {inputValue} />
        </div>
    )
}

export default Search