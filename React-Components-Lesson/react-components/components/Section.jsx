export default function Section(props) {
  return (
    <div className="section">
      <div className="section-content">
        <h2>{props.subtitle}</h2>
        <br />
        <h1>{props.mainTitle}</h1>
        <br />
        <button>{props.button}</button>
        <br />
      </div>
    </div>
  );
}
