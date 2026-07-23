import "./Banner.css";

export default function Banner({ item }) {
  return (
    <div className="detail-banner">
      <img
        src={item.banner}
        alt={item.title}
      />

      <div className="detail-overlay">
        <h1>{item.title}</h1>
      </div>
    </div>
  );
}