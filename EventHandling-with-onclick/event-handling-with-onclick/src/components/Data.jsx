import data from "../library/data.json";

export default function Data() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
