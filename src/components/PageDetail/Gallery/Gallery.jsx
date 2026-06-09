export default function Gallery({ game }) {
  return (
    <section className="gallery-section">

      <div className="container">

        <div className="section-header">

          <h2>Gallery</h2>

        </div>

        <div className="gallery-grid">

          <div className="gallery-item big">
            <img src={game.gallery1} alt="" />
          </div>

          <div className="gallery-item">
            <img src={game.gallery2} alt="" />
          </div>

          <div className="gallery-item">
            <img src={game.gallery3} alt="" />
          </div>

          <div className="gallery-item wide">
            <img src={game.gallery4} alt="" />
          </div>

        </div>

      </div>

    </section>
  );
}