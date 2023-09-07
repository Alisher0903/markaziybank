import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
} from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" container="sm" fixed='top' style={{ backgroundColor: "black" }}>
                <NavbarBrand>
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTB8Fhkk5Otk6WtWN3xrcsacKNGKbpGcTDPZnHOcD2atYJ20Eh0zIi9G6d7kfakApIrA&usqp=CAU"
                            alt="banklogo" style={{ width: "30px", marginTop: "-9px" }} />
                        <span style={{ letterSpacing: "1px", fontWeight: "700", fontSize: "1.4rem" }}>Bank</span>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='bg-light' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className='text-light' style={{ display: "inline" }}>
                                <Link to="/currencies" style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    letterSpacing: "1px",
                                    color: "white",
                                    marginLeft: "2rem",
                                }}>Currencies</Link>
                            </NavLink>
                            {/* <NavLink className='text-light' style={{ display: "inline" }}>
                                <Link to="/use/call/back" style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    letterSpacing: "1px",
                                    color: "white",
                                    marginLeft: "2rem",
                                }}>UseCallBack</Link>
                            </NavLink> */}
                        </NavItem>
                    </Nav>
                    <NavbarText className='text-light'>
                        <Button color='success py-1 px-4 fw-semibold'>
                            Download
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-download ms-1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;