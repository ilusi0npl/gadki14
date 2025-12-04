function MaterialCard({ title, images, nodeId }) {
  return (
    <div
      style={{
        width: '380px',
        height: '480px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
      data-node-id={nodeId}
    >
      {/* Title */}
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '40px',
          transform: 'translateX(-50%)',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '40px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-0.44px',
          color: '#E83F4B',
          textAlign: 'center',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >
        {title}
      </p>

      {/* Character images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          style={{
            position: 'absolute',
            left: img.left,
            top: img.top,
            width: img.width,
            height: img.height,
            objectFit: 'cover',
            objectPosition: '50% 0%',
          }}
        />
      ))}
    </div>
  );
}

export default function MaterialySection() {
  const cards = [
    {
      title: 'Dla dzieci',
      nodeId: '37:551',
      images: [
        {
          src: '/assets/chopak.png',
          alt: 'Chłopiec',
          left: '71px',
          top: '260px',
          width: '106px',
          height: '220px',
        },
        {
          src: '/assets/dziewczyna.png',
          alt: 'Dziewczynka',
          left: '194px',
          top: '236px',
          width: '115px',
          height: '244px',
        },
      ],
    },
    {
      title: 'Dla rodziców\ni opiekunów',
      nodeId: '37:549',
      images: [
        {
          src: '/assets/mama-card.png',
          alt: 'Mama',
          left: '52px',
          top: '187px',
          width: '125px',
          height: '293px',
        },
        {
          src: '/assets/tata-card.png',
          alt: 'Tata',
          left: '188px',
          top: '161px',
          width: '140px',
          height: '319px',
        },
      ],
    },
    {
      title: 'Dla edukatorów\ni nauczycieli',
      nodeId: '2008:8',
      images: [
        {
          src: '/assets/edukatorka.png',
          alt: 'Edukatorka',
          left: '35px',
          top: '148px',
          width: '135px',
          height: '332px',
        },
        {
          src: '/assets/edukator.png',
          alt: 'Edukator',
          left: '155px',
          top: '133px',
          width: '192px',
          height: '347px',
        },
      ],
    },
  ];

  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '4703px',
        width: '1728px',
        height: '909px',
      }}
      data-section="materialy"
    >
      {/* Title */}
      <h2
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '0',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '200px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-2.2px',
          color: '#E83F4B',
          margin: 0,
          textAlign: 'center',
        }}
        data-node-id="37:553"
      >
        Materiały
      </h2>

      {/* Subtitle */}
      <p
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: '260px',
          fontFamily: "'Lato', sans-serif",
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '-0.264px',
          color: '#1E1E1E',
          margin: 0,
          textAlign: 'center',
          whiteSpace: 'pre-wrap',
        }}
        data-node-id="37:552"
      >
        Na tej stronie znajdują się informacje o problemie{'\n'}wykorzystywania seksualnego dzieci oraz przyjazne{'\n'}dla dzieci materiały, które ułatwią Ci rozmowę.
      </p>

      {/* Cards container */}
      <div
        style={{
          position: 'absolute',
          left: '274px',
          top: '431px',
          display: 'flex',
          gap: '20px',
        }}
        data-node-id="39:590"
      >
        {cards.map((card) => (
          <MaterialCard key={card.nodeId} {...card} />
        ))}
      </div>
    </section>
  );
}
