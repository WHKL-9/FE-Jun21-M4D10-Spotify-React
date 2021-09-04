import { Nav, Container } from "react-bootstrap";
import "./SideNavBar.css";
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SideNavBar = () => (
  <Container fluid className="p-0">
    <Nav
      // activeKey="/home"
      className="SideNavBar d-none d-sm-flex"
    >
      <Link to="/" className="NoUnderline">
        <Nav.Item>
          <Nav.Link href="/home" className="LogoAndName mb-1">
            <span>
              <FaSpotify id="SpotifyLogo" />
            </span>
            <span>Spotify</span>
          </Nav.Link>
        </Nav.Item>
      </Link>
      <Link to="/" className="NoUnderline">
        <Nav.Item>
          <Nav.Link className="LogoAndName">
            <span>
              <AiFillHome className="LogoAlign" />
            </span>
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>
      </Link>
      <Nav.Item>
        <Nav.Link className="LogoAndName">
          <span>
            <BiSearch className="LogoAlign" />
          </span>
          <span>Search</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="LogoAndName">
          <span>
            <VscLibrary className="LogoAlign" />
          </span>
          <span>Library</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="LogoAndName">
          <span>Album</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="LogoAndName">
          <span>Artist</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
);

export default SideNavBar;
