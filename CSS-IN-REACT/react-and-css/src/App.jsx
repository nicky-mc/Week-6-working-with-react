import Section from "./components/Section";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Section
          mainTitle="Explore the world"
          subTitle="Discover new places to visit"
          text="Only your imagination is the limit to where you can go."
          buttonText="Learn More"
          img="/images/airbnb-logo.png"
          imgAlt="Airbnb logo"
        />
        <Section
          mainTitle="Are you ready?"
          subTitle="Let's go!"
          text="it's time to start your adventure, there is no limit to where you can go."
          buttonText="Buy Tickets"
          img="/images/airbnb-tickets.png"
          imgAlt="Airbnb tickets"
        />
        <Section
          mainTitle="Enjoy your vacation"
          subTitle="Stay with us"
          text="The best vacation rentals with the best prices, all in one place."
          buttonText="Book Now"
          img="/images/airbnb-vacation.png"
          imgAlt="Airbnb vacation"
        />
      </div>
    </>
  );
}
