import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
	return (
		<>
			<Navbar />
			<Hero cName = "hero" 
			heroImg = "https://happay.com/blog/wp-content/uploads/sites/12/2022/07/travel-expense-reports-t-and-e-report.webp"
			title = "Life is a journey, not a destination. Enjoy the ride."
			text = "Plan it and we make it execute"
			buttonText = "Travel Plan"
			url = "/"
			btnClass = "show"
			/>
			<Destination/>
			<Trip/>
			<Footer/>
		</>
	);
}
export default Home;
