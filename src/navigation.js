import { Navbar, NavbarToggle, NavbarBrand, NavbarCollapse, NavLink, NavDropdown, Dropdown } from "react-bootstrap"

export let Navigate = () =>
{
    return (
        <>
    <Navbar>
         <NavbarBrand>Yummy</NavbarBrand>
         <NavbarToggle></NavbarToggle>
          <NavbarCollapse>
             <nav>
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/about" >About</NavLink>
                      <NavDropdown>
                          <Dropdown.Item>Services</Dropdown.Item>
                          <Dropdown.Item>Contact Us</Dropdown.Item>
                          <Dropdown.Item>About Company</Dropdown.Item>
                      </NavDropdown>
                    <NavLink href="/software" >Software</NavLink>
                    <NavLink href="/hardware" >Hardware</NavLink>
                    <NavLink href="/login" >Login</NavLink>
             </nav>
         </NavbarCollapse>
    </Navbar>
        </>
    )
}