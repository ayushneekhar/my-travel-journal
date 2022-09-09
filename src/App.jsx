import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

const App = () => {
	const cards = data.map((loc) => <Card key={loc.id} {...loc} />);

	return (
		<>
			<Navbar />
			<div className="App">{cards}</div>
		</>
	);
};

export default App;
