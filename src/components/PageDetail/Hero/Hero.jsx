export default function Hero({ game }) {
  return (
    <div className="detail-hero">

      <img
        src={game.banner}
        alt={game.title}
      />

      <div className="detail-overlay">

        <h1>{game.title}</h1>

      </div>

    </div>
  );
}