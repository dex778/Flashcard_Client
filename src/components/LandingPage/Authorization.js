import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from '../LandingPage/Login'
import SignUp from '../LandingPage/SignUp'

const Authorization = (props) => {


    return ( 
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <SignUp updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Authorization;