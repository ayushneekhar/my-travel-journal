import LocationDot from "../assets/placeholder.png";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imageUrl} className="card--image" />
			<div className="card--text">
				<div>
					<span className="card--location">
						<img className="card--locationimg" src={LocationDot} />
						{props.location.toUpperCase()}
					</span>
					<a className="card--maps" href={props.googleMapsUrl}>
						View on Google Maps
					</a>
				</div>
				<h1 className="card-attraction">{props.title}</h1>
				<h4 className="card--date">
					{props.startDate} - {props.endDate}
				</h4>
				<p className="card--description">{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
