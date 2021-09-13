import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

 class Login extends Component {
    render() {
        return (
            <div>
                 <Container style={{ marginTop: '2em' }}></Container>
   <Form  style={{ width: '50%', margin:'auto',border:'1px solid' }}>
  {/* <Form.Group controlId="formBasicEmail">
    {/* <Form.Label style={{margin:'0'}}>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter User Name" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  {/* </Form.Group>   */}
  <Form.Text className="text-muted">
      <h1 style={{border:'1px solid'}}>Login</h1>
    </Form.Text>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> */}
   
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}
export default Login
