import React from 'react';
import { Row } from "reactstrap";
import './Footer.css';


class Footer extends React.Component {

    render(){
        return (
            <footer className="main-footer">
                    <p className="name">
                        &copy; Study JavaScript
                    </p>
            </footer>
        )
    }
}



export default Footer;
