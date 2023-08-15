import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MainNavigation() {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand>Krawler</Navbar.Brand>
				<Navbar.Toggle aria-controls="mnenu-bar" />
				<Navbar.Collapse
					aria-controls="menu-bar"
					className="justify-content-end"
				>
					<Nav>
						<Nav.Link as={Link} to="/search">
							Search
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
export default MainNavigation;
