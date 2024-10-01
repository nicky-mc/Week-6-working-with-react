export default function Section(props) {
  return (
    <div id={props.divid} className="section">
      <div className="section-content">
        <h2 id={props.h2id} className={`subtitle${props.number}`}>
          {props.subtitle}
        </h2>
        <h1 id={props.h1id} className={`mainTitle${props.number}`}>
          {props.mainTitle}
        </h1>
        <button id={props.buttonid}>{props.button}</button>
      </div>
      <div className="section-image-container">
        <img
          src={props.src}
          alt={props.mainTitle}
          className="section-image"
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
  );
}
