import { Container} from "react-bootstrap";
import "./Layout.css"
import Home from "./Home";

const Layout = () => {
    return (
        <Container className="Layout">
            <Home artist = "Avicii"/>
            <Home artist = "Adele"/>
        </Container>
    )
}

export default Layout