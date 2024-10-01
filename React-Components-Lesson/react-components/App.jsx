import Navbar from "./components/Navbar";
import Section from "./components/Section";
//now we can use the Navbar component in the App component like this:

export default function App() {
  return (
    <>
      <Navbar />
      <Section
        div-id="section1"
        subtitle="Recent Launch"
        mainTitle="Ship Flight Video"
        button="Watch Now"
        h2-id="subtitle1"
        h1-id="mainTitle1"
        button-id="button1"
      />
      <Section
        div-id="section2"
        subtitle="About"
        mainTitle="About SpaceY"
        button="Learn More"
        h2-id="subtitle2"
        h1-id="mainTitle2"
        button-id="button2"
      />
      <Section
        div-id="section3"
        subtitle="Tickets"
        mainTitle="Read More"
        button="Get Tickets"
        h2-id="subtitle3"
        h1-id="mainTitle3"
        button-id="button3"
      />
      <Section
        div-id="section4"
        subtitle="Pricing"
        mainTitle="We won't cost the earth"
        button="View Pricing"
        h2-id="subtitle4"
        h1-id="mainTitle4"
        button-id="button4"
      />
    </>
  );
}
