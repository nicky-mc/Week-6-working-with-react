export default function Section(props) {
  return (
    <div className="section">
      <h1>{props.mainTitle}</h1> <br />
      <p>{props.subTitle}</p> <br />
      <p>{props.text}</p> <br />
      <button>{props.buttonText}</button> <br />
      <img src={props.img} alt={props.imgAlt} />
    </div>
  );
}
