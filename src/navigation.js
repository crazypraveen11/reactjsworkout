import { Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"

export let Navigate = () =>
{
    return (
        <>
            <Navbar>
                <NavbarBrand>MYBRAND</NavbarBrand>
                <NavbarToggle></NavbarToggle>
                <NavbarCollapse>
                    <Nav>
                        <NavLink>MYLINK</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}