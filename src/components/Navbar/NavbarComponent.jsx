import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";

function NavbarComponent() {
  return (
    <Router>
      {/* Fixed navbar at top */}
      <Navbar expand="lg" className="bg-body-tertiary" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Container className="d-flex justify-content-center">
          {/* Centered Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComponent;
