import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login'
import SignUp from './SignUp'

interface customProps {
    updateToken(newToken: string): any
}



class Authorization extends React.Component<customProps> {
    

    render(){
        return (
            <Container className="auth-container">
            <Row>
                <Col md="6">
                    <SignUp updateToken={this.props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={this.props.updateToken}/>
                </Col>
            </Row>
        </Container>
        )
    }
}

 
export default Authorization












// class  extends React.Component {
//     constructor(props){
//         super(props)
    
//     }

//     reder(){
//         return (
            
//         )
//     }
// }


// const Authorization = (props) => {


//     return ( 
//         <Container className="auth-container">
//             <Row>
//                 <Col md="6">
//                     <SignUp updateToken={props.updateToken}/>
//                 </Col>
//                 <Col md="6" className="login-col">
//                     <Login updateToken={props.updateToken}/>
//                 </Col>
//             </Row>
//         </Container>
//      );
// }