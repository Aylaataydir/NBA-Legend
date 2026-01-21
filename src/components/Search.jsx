

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../assets/nba-logo.png"

const Search = () => {
    return (
        <div className='container text-center '>
        <img src={logo}  width={150} alt="" />
        <h1>NBA Legends</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Player..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Search