import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component{
    render() {
        return(
            <Navbar bg="primary" variant="dark" className="Header-app">
                Header
            </Navbar>
        );
    }
}

export default Header;