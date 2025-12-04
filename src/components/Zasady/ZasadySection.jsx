// GADKI Cards data
const cards = [
  {
    letter: 'G',
    text: 'Gdy mówisz NIE, to znaczy NIE',
    color: '#B61919',
    rotation: 7.732,
    zIndex: 1,
  },
  {
    letter: 'A',
    text: 'Alarmuj, gdy potrzebujesz pomocy',
    color: '#0A5556',
    rotation: -6.124,
    zIndex: 2,
  },
  {
    letter: 'D',
    text: 'Dobrze zrobisz, mówiąc o tajemnicach, które cię niepokoją',
    color: '#F1C500',
    rotation: 3.584,
    zIndex: 3,
  },
  {
    letter: 'K',
    text: 'Koniecznie pamiętaj, że twoje ciało należy do Ciebie',
    color: '#EF771B',
    rotation: -0.251,
    zIndex: 4,
  },
  {
    letter: 'I',
    text: 'Intymne części ciała są prywatne',
    color: '#273488',
    rotation: 4.711,
    zIndex: 5,
    hasDecoration: true,
  },
];

function GADKICard({ letter, text, color, rotation, zIndex, hasDecoration }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '380px',
        height: '480px',
        backgroundColor: color,
        borderRadius: '12px',
        transform: `rotate(${rotation}deg)`,
        zIndex,
        overflow: 'hidden',
      }}
    >
      {/* Large letter */}
      <p
        style={{
          position: 'absolute',
          left: '43px',
          top: '20px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '200px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-2.2px',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {letter}
      </p>

      {/* Star decoration for I card */}
      {hasDecoration && (
        <img
          src="/assets/star-decoration.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '10px',
            top: '20px',
            width: '200px',
            height: '170px',
            opacity: 0.3,
          }}
        />
      )}

      {/* Description text */}
      <p
        style={{
          position: 'absolute',
          left: '40px',
          top: letter === 'D' || letter === 'K' ? '308px' : '352px',
          width: '280px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '40px',
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.44px',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function ZasadySection() {
  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '2950px',
        width: '1728px',
        height: '1352px',
      }}
      data-section="zasady"
    >
      {/* Wave background */}
      <img
        src="/assets/zasady-wave-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-1px',
          top: '0px',
          width: '1730px',
          height: '1352px',
          pointerEvents: 'none',
        }}
        data-node-id="32:477"
      />

      {/* Title */}
      <h2
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '13px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '200px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-2.2px',
          color: '#E83F4B',
          margin: 0,
          textAlign: 'center',
        }}
        data-node-id="30:219"
      >
        Zasady
      </h2>

      {/* Gray placeholder bar */}
      <div
        style={{
          position: 'absolute',
          left: '274px',
          top: '322px',
          width: '1180px',
          height: '190px',
          backgroundColor: '#D9D9D9',
          borderRadius: '0px',
        }}
        data-node-id="2279:4"
      />

      {/* Cards stack container */}
      <div
        style={{
          position: 'absolute',
          left: '592px',
          top: '535px',
          width: '441px',
          height: '527px',
        }}
        data-node-id="30:314"
      >
        {/* Cards rendered from bottom to top */}
        {cards.map((card, index) => (
          <GADKICard key={card.letter} {...card} />
        ))}
      </div>

      {/* Navigation buttons - up, eye, down */}
      <div
        style={{
          position: 'absolute',
          left: '1074px',
          top: '657px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
        data-node-id="30:313"
      >
        {/* Up arrow */}
        <button
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#E83F4B',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Poprzednia karta"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5L12 19M12 5L6 11M12 5L18 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Eye icon */}
        <button
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#E83F4B',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Zobacz kartę"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12.5" r="3" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        {/* Down arrow */}
        <button
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#E83F4B',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Następna karta"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19L12 5M12 19L6 13M12 19L18 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
