import IceCream from "./lib/IceCream.json";
import IceCreamContainer from "./components/IceCreamContainer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>The Cat that got the Ice Cream!</h1>
        <h2>
          I scream you scream <br /> we all scream for Ice Cream!
        </h2>
      </header>
      <div className="ice-cream-list">
        {IceCream.map((IceCream) => (
          <IceCreamContainer
            key={IceCream.id}
            id={IceCream.id}
            name={IceCream.name}
            flavour={IceCream.flavour}
            cost={IceCream.cost}
            imagePath={IceCream["image-path"]}
          />
        ))}
      </div>
    </div>
  );
}
