import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="mb" style={{ height: "3.75rem" }}>
      <Container>
        <Stack direction="horizontal" gap={"3"}>
          <img
            src="/images/cheemsLogo.jpg"
            alt="Cheems"
            style={{ width: "60px", height: "80x", marginRight: "10px" }}
          />
          <h1>
            <Link to={"/"} className="link-light text decoration-none">
              Jhakaas Chat
            </Link>
          </h1>
        </Stack>
        <span className="text-warning">Logged in as Ankit</span>
        <Nav>
          <Stack direction="horizontal" gap={"3"}>
            <Link to={"/login"} className="link-light text decoration-none">
              Login
            </Link>
            <Link to={"/register"} className="link-light text decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
