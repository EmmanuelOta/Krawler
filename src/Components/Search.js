import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Search.module.css";

function Search() {
	return (
		<Container>
			<Row className={classes.rowStyle}>
				<Col>
					<div>
						<textarea
							className={classes.promptArea}
							placeholder="Enter prompt:"
							rows={12}
						/>
						<button className={classes.clearPrompt}>Clear Prompt</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
export default Search;
