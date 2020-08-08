import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

import { GoGlobe, GoListUnordered } from 'react-icons/go';
import { FaFileInvoice, FaUsers, FaRoute, FaRegCalendarAlt } from 'react-icons/fa';
import { MdAssignmentReturn, MdReportProblem } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import { RiMessage2Line, RiNumbersLine } from 'react-icons/ri';

import './LeftPanel.css';

class LeftPanel extends Component{
    render() {
        return(
            <div className="left-panel-app">
                <Nav  className="flex-column">
                    <Nav.Link className="navs" eventKey="link-1"><GoGlobe/> Country Performance</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><RiNumbersLine/> Daily Figures</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-1"><GoListUnordered/> Customer Orders</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-2"><FaFileInvoice/> Invoices</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><MdAssignmentReturn/> Order Returns</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><FaUsers/> Users</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><FaRoute/> Routes</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><FaRegCalendarAlt/> Schedules</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><TiDocumentText/> Reports</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><RiMessage2Line/> Messages</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><RiMessage2Line/> Messages</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><RiMessage2Line/> Messages</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><RiMessage2Line/> Messages</Nav.Link>
                    <Nav.Link className="navs" eventKey="link-3"><MdReportProblem/> Report Issues</Nav.Link>
                    <Nav.Link></Nav.Link>
                </Nav>
            </div>
        );
    }
}

export default LeftPanel;