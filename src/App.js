import "./App.css";
import MainNavigation from "./UI/MainNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Components/Search";

function App() {
	return (
		<BrowserRouter>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<Search />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
