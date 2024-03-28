import TripData from './TripData';
import Trip1 from "../assets/7.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/9.jpg"
require('./TripStyles.css')


function Trip() {
	return (
		<div className="trip">
			<h1>Recent Trips</h1>
			<p>Explore the unexplored, and discover the magic that lies beyond the beaten path. </p>
			<div className="tripcard">
				<TripData
				image = {Trip1}
				heading = "Trip to Varanasi"
				text = "Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world and is considered the spiritual capital of India. Located on the banks of the Ganges River in the state of Uttar Pradesh, Varanasi is famous for its ghats, where pilgrims perform rituals and ceremonies, and its ancient temples, including the Kashi Vishwanath Temple dedicated to Lord Shiva. The city is also renowned for its vibrant culture, classical music, silk weaving industry."
				/>

			<TripData
				image = {Trip2}
				heading = "Trip to Lakshwadeep"
				text = "Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Not all of the islands are inhabited, and only a few are open to visitors (permits required). Kavaratti, one of the more developed islands, is home to dozens of mosques, including the ornately decorated Ujra Mosque, as well as Kavaratti Aquarium, showcasing regional fish, shark and coral species. "
				/>

			<TripData
				image = {Trip3}
				heading = "Trip to Goa"
				text = "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda."
				/>
			</div>
		</div>
	)
}


export default Trip;