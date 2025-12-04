export default function IntroSection() {
  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '1750px',
        width: '1728px',
        height: '904px',
      }}
      data-section="intro"
    >
      {/* Left star decoration - layer 1 */}
      <img
        src="/assets/star-decoration-left.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-203px',
          top: '228px',
          width: '521px',
          height: '481px',
          opacity: 0.9,
          pointerEvents: 'none',
        }}
        data-node-id="2018:46"
      />
      {/* Left star decoration - layer 2 */}
      <img
        src="/assets/star-decoration-left-2.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-203px',
          top: '228px',
          width: '521px',
          height: '481px',
          opacity: 0.9,
          pointerEvents: 'none',
        }}
        data-node-id="2018:47"
      />

      {/* Right decoration */}
      <img
        src="/assets/intro-decoration-right.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '1358px',
          top: '-46px',
          width: '256px',
          height: '354px',
          pointerEvents: 'none',
        }}
        data-node-id="2018:52"
      />

      <div
        style={{
          position: 'absolute',
          left: '536px',
          top: '0',
          width: '655px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
        }}
        data-node-id="30:302"
      >
      {/* Gadek mascot in circular frame */}
      <div
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          backgroundColor: '#E0DDD1',
          overflow: 'hidden',
          position: 'relative',
        }}
        data-node-id="2007:306"
      >
        <img
          src="/assets/gadek-intro.png"
          alt="Gadek - maskotka programu"
          style={{
            position: 'absolute',
            left: '38px',
            top: '24px',
            width: '258px',
            height: '268px',
            objectFit: 'cover',
          }}
          data-node-id="2007:307"
        />
      </div>

      {/* Main title */}
      <h2
        style={{
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '96px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-1.056px',
          color: '#E83F4B',
          textAlign: 'center',
          margin: 0,
        }}
        data-node-id="8:78"
      >
        Proste rozmowy
        <br />
        na ważne tematy
      </h2>

      {/* Description text container */}
      <div
        style={{
          width: '480px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          textAlign: 'center',
        }}
        data-node-id="2025:779"
      >
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.264px',
            color: '#E83F4B',
            margin: 0,
          }}
          data-node-id="2025:778"
        >
          Gadki to rozmowy na temat kilku prostych zasad, które pomogą ochronić
          Twoje dziecko przed wykorzystywaniem seksualnym.
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
          data-node-id="2025:777"
        >
          Dzieci dowiedzą się z nich, że to one decydują o swoim ciele, zawsze
          mają prawo powiedzieć „nie" i powinny szukać pomocy, jeżeli coś je
          niepokoi lub martwi.
        </p>
      </div>

      {/* CTA Button */}
      <button
        style={{
          width: '280px',
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
        }}
        data-node-id="27:116"
      >
        O programie
      </button>
      </div>
    </section>
  );
}
