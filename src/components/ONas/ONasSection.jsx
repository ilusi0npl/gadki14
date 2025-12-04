export default function ONasSection() {
  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '5938px',
        width: '1728px',
        height: '866px',
        overflow: 'hidden',
      }}
      data-section="onas"
    >
      {/* Left decorative shape */}
      <div
        style={{
          position: 'absolute',
          left: '27px',
          top: '8px',
          width: '483px',
          height: '374px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/assets/onas-left-decoration.png"
          alt=""
          aria-hidden="true"
          style={{
            width: '433px',
            height: '216px',
            transform: 'rotate(335.896deg)',
          }}
          data-node-id="2020:793"
        />
      </div>

      {/* Decorative flower on the right */}
      <img
        src="/assets/onas-flower-decoration.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '1462px',
          top: '433px',
          width: '412px',
          height: '337px',
        }}
        data-node-id="2018:292"
      />

      {/* FDDS Logo in circular frame */}
      <div
        style={{
          position: 'absolute',
          left: '772.5px',
          top: '0',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
        }}
        data-node-id="2009:230"
      >
        <img
          src="/assets/fdds-logo-group.svg"
          alt="Fundacja Dajemy Dzieciom Siłę"
          style={{
            position: 'absolute',
            left: '16.5px',
            top: '58px',
            width: '146px',
            height: '64px',
            transform: 'scaleY(-1)',
          }}
          data-node-id="2009:236"
        />
      </div>

      {/* Title */}
      <h2
        style={{
          position: 'absolute',
          left: '535px',
          top: '228px',
          width: '655px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '96px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-1.056px',
          color: '#E83F4B',
          textAlign: 'center',
          margin: 0,
        }}
        data-node-id="2009:232"
      >
        O nas
      </h2>

      {/* Description text */}
      <div
        style={{
          position: 'absolute',
          left: '622.5px',
          top: '382px',
          width: '480px',
          textAlign: 'center',
        }}
        data-node-id="2009:233"
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.264px',
            color: '#E83F4B',
            margin: '0 0 24px 0',
          }}
        >
          W Fundacji Dajemy Dzieciom Siłę od ponad 30 lat chronimy dzieci przed przemocą<br />i wykorzystaniem seksualnym.
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.264px',
            color: '#1E1E1E',
            margin: 0,
          }}
        >
          Zapewniamy dzieciom i ich opiekunom wsparcie, profesjonalną pomoc psychologiczną i prawną. Uczymy dorosłych, jak mądrze i skutecznie reagować na przemoc wobec dzieci oraz co robić, gdy podejrzewają, że dziecko jest krzywdzone.
        </p>
      </div>

      {/* CTA Button */}
      <button
        style={{
          position: 'absolute',
          left: '722.5px',
          top: '790px',
          width: '280px',
          height: '76px',
          padding: '20px 24px',
          backgroundColor: '#E83F4B',
          borderRadius: '48px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Lato', sans-serif",
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: 1.5,
          letterSpacing: '-0.264px',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}
        data-node-id="2009:234"
      >
        Poznaj nasze działania
      </button>
    </section>
  );
}
