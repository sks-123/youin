import React, { Component } from 'react';
import './Menu.css';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import HomeDashboard from './HomeDashboard';
import Courses from './Courses';
import Enterprise from './Enterprise';
import AboutUs from './AboutUs';
import ContactInfo from './ContactInfo';
import CenterInfo from './CenterInfo';
import Career from './Career';
import SignIn from './SignIn';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const navbar = {
    backgroundColor: '#F16E10',
    lineheight: 1,
};
export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
      onMouseEnter() {
        this.setState({dropdownOpen: true});
      }
    
      onMouseLeave() {
        this.setState({dropdownOpen: false});
      }
    render() {
        return (
            <Router>
                <div>
                    <Navbar color="blue" className="menustyle" light expand="md">
                        
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse className="menustyle" isOpen={this.state.isOpen} navbar>
                            <Nav className="menustyle" navbar tabs>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/" exact activeClassName="active">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/Courses" exact activeClassName="active" >Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} exact to="/Enterprise" activeClassName="active">Enterprise</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} exact to="/AboutUs" activeClassName="active">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} exact to="/Career" activeClassName="active">Careers</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} >
                                    <DropdownToggle nav caret tag={RRNavLink} exact isActive={(_, { pathname }) => ["/ContactInfo", "/CenterInfo"].includes(pathname)} activeClassName="active">
                                    Contact Us
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={RRNavLink} exact to="/ContactInfo" activeClassName="active">
                                        Contact Information
                                    </DropdownItem>
                                    <DropdownItem tag={RRNavLink} exact to="/CenterInfo" activeClassName="active">
                                        Center Information
                                </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <Nav className="ml-auto" navbar tabs>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/SignIn" activeClassName="active">Sign In/Register</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>                    
                </div>
                <Route path="/" exact strict component={HomeDashboard} />
                <Route path="/Home" exact strict component={HomeDashboard} />
                <Route path="/Courses" exact strict component={Courses} />
                <Route path="/Enterprise" exact strict component={Enterprise} />
                <Route path="/AboutUs" exact strict component={AboutUs} />                
                <Route path="/Career" exact strict component={Career} />
                <Route path="/ContactInfo" component={ContactInfo} />
                <Route path="/CenterInfo" component={CenterInfo} />
                <Route path="/SignIn" exact strict component={SignIn} />
            </Router>
        );
    }
}