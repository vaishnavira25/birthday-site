export default function PageContext({ item }) {
  return (
    <div className="container default-padding">
      {item.sections?.map((section, index) => {
        switch (section.layout) {
          case "image-text":
            return (
              <div className="detail-row" key={index}>
                <div className="detail-image">
                  <img src={section.image} alt={section.title} />
                </div>

                <div className="detail-text">
                  <h2>{section.title}</h2>

                  {Array.isArray(section.description)
                    ? section.description.map((paragraph, i) => (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )}
                </div>
              </div>
            );

          case "full-text":
            return (
              <div className="detail-full-text" key={index}>
                <h2>{section.title}</h2>

                {Array.isArray(section.description)
                  ? section.description.map((paragraph, i) => (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))
                  : (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: section.description,
                      }}
                    />
                  )}
              </div>
            );

          case "text-image":
          default:
            return (
              <div className="detail-row" key={index}>
                <div className="detail-text">
                  <h2>{section.title}</h2>

                  {Array.isArray(section.description)
                    ? section.description.map((paragraph, i) => (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )}
                </div>

                <div className="detail-image">
                  <img src={section.image} alt={section.title} />
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}