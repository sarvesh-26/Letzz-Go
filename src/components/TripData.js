require('./TripStyles.css')

function TripData(props) {
	return (
		<div className="t-Card">
			<div className="t-image">
				<img src={props.image} alt="" />
			</div>
			<h4>{props.heading}</h4>
			<p>{props.text}</p>

		</div>
	);
}
export default TripData;