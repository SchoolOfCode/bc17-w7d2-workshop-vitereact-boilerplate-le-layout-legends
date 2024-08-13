import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainBody from "./MainBody.jsx";
import "./App.css";

function App() {
	return (
		<>
			<div className="wrapper">
				<Header />
				<MainBody />
				<Footer />
			</div>
		</>
	);
}

export default App;
