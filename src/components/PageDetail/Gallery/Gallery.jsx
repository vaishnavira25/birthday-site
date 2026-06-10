export default function Gallery({ game }) {
  const sizes = [
    "small",
    "medium",
    "large",
    "medium",
  ];

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="section-header">
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">

         {game.gallery.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${item.size}`}
          >
            <img src={item.image} alt="" />
          </div>
        ))}

        </div>

      </div>
    </section>
  );
}