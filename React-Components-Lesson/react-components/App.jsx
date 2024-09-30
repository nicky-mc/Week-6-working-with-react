import Navbar from "./components/Navbar";
import Section from "./components/Section";
//now we can use the Navbar component in the App component like this:

export default function App() {
  return (
    <>
      <Navbar />
      <Section subtitle="Recent Launch" mainTitle="Ship Flight Video" />
      <Section subtitle="About" mainTitle="About SpaceY" />
      <Section subtitle="Tickets" mainTitle="Read More" />
      <Section subtitle="Pricing" mainTitle="We won't cost the earth" />
    </>
  );
}
