export default function PageContext({ game }) {
  return (
    <div className="container default-padding">
      {game.sections.map((section, index) => (
        <div className="detail-row" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="detail-text">
                <h2>{section.title}</h2>

                {Array.isArray(section.description) ? (
                  section.description.map((paragraph, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                )}
              </div>

              <div className="detail-image">
                <img src={section.image} alt={section.title} />
              </div>
            </>
          ) : (
            <>
              <div className="detail-image">
                <img src={section.image} alt={section.title} />
              </div>

              <div className="detail-text">
                <h2>{section.title}</h2>

                {Array.isArray(section.description) ? (
                  section.description.map((paragraph, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}