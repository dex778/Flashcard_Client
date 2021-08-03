import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
// import './Navigation.css'
 
interface customProps {
  logout(): any
}


class Navigation extends React.Component<customProps> {
 


  render(){
      return (
        <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <ReactBootStrap.Navbar.Brand style={{ margin:'5px'}} href="/">Study JS</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link onClick={this.props.logout}>Logout</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank" >
        Study Resources
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
      </div>
      )
  }
}



// const Navigation = (props) => {
  
//     return ( 
//         <div>
//         <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//     <ReactBootStrap.Navbar.Brand href="/">Study JS</ReactBootStrap.Navbar.Brand>
//   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//     <ReactBootStrap.Nav className="mr-auto">
//       <ReactBootStrap.Nav.Link href="/">Sign Up</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link href="/">Login</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.NavDropdown title="More Links" id="collasible-nav-dropdown">
//         <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
//         <ReactBootStrap.NavDropdown.Divider />
//         <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
//       </ReactBootStrap.NavDropdown>
//     </ReactBootStrap.Nav>
//     <ReactBootStrap.Nav>
//       <ReactBootStrap.Nav.Link onClick={props.logout}>Logout</ReactBootStrap.Nav.Link>
//       <ReactBootStrap.Nav.Link eventKey={2} href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank" >
//         Study Resources
//       </ReactBootStrap.Nav.Link>
//     </ReactBootStrap.Nav>
//   </ReactBootStrap.Navbar.Collapse>
// </ReactBootStrap.Navbar>
//       </div>
//     );
// }
 
export default Navigation;