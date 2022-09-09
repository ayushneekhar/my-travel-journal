import image from "../assets/Fill 213.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<img src={image} className="navbar--image" />
			<div className="navbar--text">my travel journal.</div>
		</div>
	);
};

export default Navbar;
