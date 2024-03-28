import m1 from "../assets/1.jpg";
import m2 from "../assets/2.jpg";
import m3 from "../assets/3.jpg";
import m4 from "../assets/4.jpg";
import m5 from "../assets/5.jpg";
import m6 from "../assets/6.jpg";
import DestinationData from "./DestinationData";

require("./DestinationStyles.css");

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Tours offer you the opportunity to explore, discover, and create
        memories that last a lifetime
      </p>

      <DestinationData
        className="first-des"
        heading="Ram Mandir, Ayodhya"
        text="Nahargarh Fort, located in the Aravalli Hills overlooking the city
            of Jaipur, Rajasthan, India, is a historic fortress with stunning
            architectural features and panoramic views. Built in 1734 by
            Maharaja Sawai Jai Singh II, it served as a defensive structure to
            protect Jaipur. The fort's name, Nahargarh, translates to abode of
            tigers,and it is said to have been named after Nahar Singh Bhomia,
            a Rathore prince whose spirit was believed to haunt the site during
            its construction. Today, Nahargarh Fort is a popular tourist
            attraction known for its intricate palaces, vast courtyards, and
            beautiful gardens, offering visitors a glimpse into Rajasthan's rich
            history and heritage."
        img1={m3}
        img2={m4}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Nahargarh Fort, Rajasthan"
        text="Nahargarh Fort, located in the Aravalli Hills overlooking the city
            of Jaipur, Rajasthan, India, is a historic fortress with stunning
            architectural features and panoramic views. Built in 1734 by
            Maharaja Sawai Jai Singh II, it served as a defensive structure to
            protect Jaipur. The fort's name, Nahargarh, translates to abode of
            tigers,and it is said to have been named after Nahar Singh Bhomia,
            a Rathore prince whose spirit was believed to haunt the site during
            its construction. Today, Nahargarh Fort is a popular tourist
            attraction known for its intricate palaces, vast courtyards, and
            beautiful gardens, offering visitors a glimpse into Rajasthan's rich
            history and heritage."
        img1={m1}
        img2={m2}
      />

      <DestinationData
        className="first-des"
        heading="Alappuzha, Kerela"
        text="Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event."
        img1={m5}
        img2={m6}
      />
    </div>
  );
};
export default Destination;
