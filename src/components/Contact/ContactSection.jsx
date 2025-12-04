export default function ContactSection() {
  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '8100px',
        width: '1728px',
        height: '982px',
        overflow: 'hidden',
        backgroundColor: '#F6F5F1', // Beige base background
      }}
      data-section="contact"
      data-node-id="39:594"
    >
      {/* Top wave - red wave creating transition from beige to red at y=185.05 */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '185.05px',
          width: '1728px',
          height: '723px',
          zIndex: 1,
        }}
        data-node-id="31:357"
      >
        <img
          src="/assets/contact-wave-top.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: '1728px',
            height: '723px',
          }}
        />
      </div>

      {/* Bottom wave - red wavy edge at bottom, rotated 180deg */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '336.26px',
          width: '1728px',
          height: '723px',
          transform: 'rotate(180deg)',
          zIndex: 1,
        }}
        data-node-id="31:415"
      >
        <img
          src="/assets/contact-wave-bottom.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: '1728px',
            height: '723px',
          }}
        />
      </div>

      {/* Dog decoration at the top */}
      <img
        src="/assets/piesek.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '748px',
          top: '0',
          width: '231.15px',
          height: '251px',
          zIndex: 3,
        }}
        data-node-id="2009:108"
      />

      {/* Decorative flower on the left */}
      <img
        src="/assets/contact-flower.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-280px',
          top: '555px',
          width: '464px',
          height: '379px',
          zIndex: 2,
        }}
        data-node-id="2020:773"
      />

      {/* Star decoration on the right */}
      <img
        src="/assets/contact-star-right.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '1480px',
          top: '274px',
          width: '454px',
          height: '419.396px',
          zIndex: 2,
        }}
        data-node-id="2027:1870"
      />

      {/* Left Column - For Children */}
      <div
        style={{
          position: 'absolute',
          left: '373.69px',
          top: '321.86px',
          width: '380.309px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
        data-node-id="31:425"
      >
        <p
          style={{
            width: '100%',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.396px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
          data-node-id="31:389"
        >
          Jeżeli jesteś dzieckiem i trudno Ci porozmawiać z osobą dorosłą z Twojego otoczenia...
        </p>

        <p
          style={{
            width: '100%',
            fontFamily: "'Lato', sans-serif",
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.22px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
          data-node-id="31:391"
        >
          Telefon Zaufania dla Dzieci i Młodzieży –116 111 może Ci pomóc. Prowadzimy bezpłatną i anonimową pomoc. Zadzwoń do nas pod numer 116 111 lub odwiedź naszą stronę internetową{' '}
          <a
            href="https://116111.pl/"
            style={{
              color: '#FFFFFF',
              textDecoration: 'underline',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            116111.pl
          </a>
          .
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            width: '281.381px',
          }}
          data-node-id="31:419"
        >
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 24px',
              boxSizing: 'border-box',
            }}
            data-node-id="31:401"
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: '-0.22px',
                color: '#E83F4B',
                margin: 0,
              }}
              data-node-id="31:402"
            >
              Zadzwoń
            </p>
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              borderRadius: '48px',
              border: '2px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 24px',
              boxSizing: 'border-box',
            }}
            data-node-id="31:411"
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: '-0.22px',
                color: '#FFFFFF',
                margin: 0,
              }}
              data-node-id="31:412"
            >
              Odwiedź stronę
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - For Parents/Teachers */}
      <div
        style={{
          position: 'absolute',
          left: '974px',
          top: '321.86px',
          width: '380.309px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          alignItems: 'flex-start',
          zIndex: 2,
        }}
        data-node-id="31:426"
      >
        <p
          style={{
            width: '100%',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.396px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
          data-node-id="31:399"
        >
          Jesteś rodzicem lub nauczycielem i chcesz porozmawiać o bezpieczeństwie dziecka?
        </p>

        <p
          style={{
            width: '100%',
            fontFamily: "'Lato', sans-serif",
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.22px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
          data-node-id="31:400"
        >
          Możesz skontaktować się z nami telefonicznie pod numerem Telefonu dla Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci: 800 100 100 lub poprzez stronę{' '}
          <a
            href="https://800100100.pl/"
            style={{
              color: '#FFFFFF',
              textDecoration: 'underline',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            800100100.pl
          </a>
          .
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            width: '281.381px',
          }}
          data-node-id="31:420"
        >
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 24px',
              boxSizing: 'border-box',
            }}
            data-node-id="31:421"
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: '-0.22px',
                color: '#E83F4B',
                margin: 0,
              }}
              data-node-id="31:422"
            >
              Zadzwoń
            </p>
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              borderRadius: '48px',
              border: '2px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 24px',
              boxSizing: 'border-box',
            }}
            data-node-id="31:423"
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: '-0.22px',
                color: '#FFFFFF',
                margin: 0,
              }}
              data-node-id="31:424"
            >
              Odwiedź stronę
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
