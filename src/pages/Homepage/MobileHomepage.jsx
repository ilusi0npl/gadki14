// Mobile Homepage - 390px width, 13222px height
// Based on Figma design node 2078-421

export default function MobileHomepage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '390px',
        minHeight: '13222px',
        backgroundColor: '#EFEEE8',
        overflow: 'hidden',
      }}
    >
      {/* Hero Union Background */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          width: '1186.673px',
          height: '798px',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/mobile/hero-union-mobile.svg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Zasady Union Background */}
      <div
        style={{
          position: 'absolute',
          left: '-539.12px',
          top: '2973px',
          width: '1353.213px',
          height: '1057px',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/mobile/zasady-union-mobile.svg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Contact section background */}
      <div
        style={{
          position: 'absolute',
          left: '-76px',
          top: '9992px',
          width: '691px',
          height: '2203.725px',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/mobile/contact-bg.svg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* ========== HEADER ========== */}
      <header
        style={{
          position: 'absolute',
          left: '50%',
          top: '50px',
          transform: 'translateX(-50%)',
          width: '350px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* FDDS Logo */}
        <div style={{ width: '92px', height: '40px' }}>
          <img
            src="/assets/fdds-logo-new.svg"
            alt="Fundacja Dajemy Dzieciom Siłę"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        {/* Hamburger Menu */}
        <button
          style={{
            width: '50px',
            height: '38px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
          aria-label="Menu"
        >
          <img
            src="/assets/mobile/hamburger-menu.svg"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </button>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section data-section="hero-mobile" style={{ position: 'relative', zIndex: 1 }}>
        {/* GADKI Title */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '258px',
            transform: 'translateX(-50%)',
            width: '330px',
            height: '152px',
          }}
        >
          <img
            src="/assets/mobile/gadki-title-mobile.svg"
            alt="GADKI"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '422px',
            transform: 'translateX(-50%)',
            width: '350px',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '44px',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.484px',
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Program wzmacniania bezpieczeństwa dzieci
        </p>

        {/* Video Thumbnail */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '656px',
            width: '350px',
            height: '184px',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <img
            src="/assets/video-thumbnail.jpg"
            alt="Obejrzyj film"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/mobile/play-arrow.svg"
              alt="Play"
              style={{ width: '54px', height: '69px' }}
            />
          </div>
        </div>
      </section>

      {/* ========== INTRO SECTION ========== */}
      <section
        data-section="intro-mobile"
        style={{
          position: 'absolute',
          left: '20px',
          top: '1010px',
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* Gadek mascot */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#E0DDD1',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src="/assets/gadek-intro.png"
            alt="Gadek"
            style={{
              position: 'absolute',
              left: '38px',
              top: '22px',
              width: '233px',
              height: '242px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '82px',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.902px',
            color: '#E83F4B',
            textAlign: 'center',
            margin: 0,
            width: '350px',
          }}
        >
          Proste rozmowy
          <br />
          na ważne tematy
        </h2>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              width: '250px',
              fontFamily: "'Lato', sans-serif",
              fontSize: '22px',
              fontWeight: 600,
              lineHeight: 1.6,
              letterSpacing: '-0.242px',
              color: '#E83F4B',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Gadki to rozmowy na temat kilku prostych zasad, które pomogą ochronić
            Twoje dziecko przed wykorzystywaniem seksualnym.
          </p>
          <p
            style={{
              width: '250px',
              fontFamily: "'Lato', sans-serif",
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '-0.242px',
              color: '#1E1E1E',
              textAlign: 'center',
              margin: 0,
            }}
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
        >
          O programie
        </button>
      </section>

      {/* ========== ZASADY SECTION ========== */}
      <section data-section="zasady-mobile">
        {/* Title */}
        <h2
          style={{
            position: 'absolute',
            left: '50%',
            top: '2951px',
            transform: 'translateX(-50%)',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '120px',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-1.32px',
            color: '#E83F4B',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Zasady
        </h2>

        {/* Description */}
        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '3143px',
            transform: 'translateX(-50%)',
            width: '350px',
            fontFamily: "'Lato', sans-serif",
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '-0.242px',
            color: '#1E1E1E',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Każda z liter wchodzących w skład słowa <em style={{ fontWeight: 700 }}>GADKI</em> odnosi
          się do różnych wskazówek, które pomogą dziecku zachować bezpieczeństwo
        </p>

        {/* Cards Stack */}
        <div
          style={{
            position: 'absolute',
            left: '30px',
            top: '3444px',
            width: '330px',
            height: '394px',
          }}
        >
          {/* Card I (bottom) */}
          <MobileGADKICard
            letter="I"
            text="Intymne części ciała są prywatne"
            color="#273488"
            rotation={4.711}
            zIndex={5}
            style={{ left: '38px', top: '6px' }}
          />
          {/* Card K */}
          <MobileGADKICard
            letter="K"
            text="Koniecznie pamiętaj, że twoje ciało należy do Ciebie"
            color="#EF771B"
            rotation={-0.251}
            zIndex={4}
            style={{ left: '22px', top: '17px' }}
          />
          {/* Card D */}
          <MobileGADKICard
            letter="D"
            text="Dobrze zrobisz, mówiąc o tajemnicach, które cię niepokoją"
            color="#F1C500"
            rotation={3.584}
            zIndex={3}
            style={{ left: '12px', top: '9px' }}
          />
          {/* Card A */}
          <MobileGADKICard
            letter="A"
            text="Alarmuj, gdy potrzebujesz pomocy"
            color="#0A5556"
            rotation={-6.124}
            zIndex={2}
            style={{ left: '5px', top: '3px' }}
          />
          {/* Card G (top) */}
          <MobileGADKICard
            letter="G"
            text="Gdy mówisz NIE, to znaczy NIE"
            color="#B61919"
            rotation={7.732}
            zIndex={1}
            style={{ left: '48px', top: '0' }}
          />
        </div>
      </section>

      {/* ========== MATERIAŁY SECTION ========== */}
      <section data-section="materialy-mobile">
        <h2
          style={{
            position: 'absolute',
            left: '50%',
            top: '4223px',
            transform: 'translateX(-50%)',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '120px',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-1.32px',
            color: '#E83F4B',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Materiały
        </h2>

        <p
          style={{
            position: 'absolute',
            left: '50%',
            top: '4395px',
            transform: 'translateX(-50%)',
            width: '350px',
            fontFamily: "'Lato', sans-serif",
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '-0.242px',
            color: '#1E1E1E',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Na tej stronie znajdują się informacje o problemie wykorzystywania
          seksualnego dzieci oraz przyjazne dla dzieci materiały, które ułatwią Ci
          rozmowę.
        </p>

        {/* Cards Container */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '4671px',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* Dla dzieci */}
          <MaterialCard title="Dla dzieci">
            <img
              src="/assets/chopak.png"
              alt=""
              style={{
                position: 'absolute',
                left: '66px',
                top: '240px',
                width: '98px',
                height: '202px',
                objectFit: 'cover',
              }}
            />
            <img
              src="/assets/dziewczyna.png"
              alt=""
              style={{
                position: 'absolute',
                left: '178px',
                top: '217px',
                width: '106px',
                height: '225px',
                objectFit: 'cover',
              }}
            />
          </MaterialCard>

          {/* Dla rodziców */}
          <MaterialCard title={<>Dla rodziców<br />i opiekunów</>}>
            <img
              src="/assets/mama-card.png"
              alt=""
              style={{
                position: 'absolute',
                left: '48px',
                top: '172px',
                width: '115px',
                height: '270px',
                objectFit: 'cover',
              }}
            />
            <img
              src="/assets/tata-card.png"
              alt=""
              style={{
                position: 'absolute',
                left: '173px',
                top: '148px',
                width: '129px',
                height: '294px',
                objectFit: 'cover',
              }}
            />
          </MaterialCard>

          {/* Dla edukatorów */}
          <MaterialCard title={<>Dla edukatorów<br />i nauczycieli</>}>
            <img
              src="/assets/edukatorka.png"
              alt=""
              style={{
                position: 'absolute',
                left: '32px',
                top: '136px',
                width: '124px',
                height: '434px',
                objectFit: 'cover',
              }}
            />
            <img
              src="/assets/edukator.png"
              alt=""
              style={{
                position: 'absolute',
                left: '143px',
                top: '122px',
                width: '177px',
                height: '466px',
                objectFit: 'cover',
              }}
            />
          </MaterialCard>
        </div>
      </section>

      {/* ========== O NAS SECTION ========== */}
      <section
        data-section="onas-mobile"
        style={{
          position: 'absolute',
          left: '50%',
          top: '6588px',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* FDDS Logo Circle */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src="/assets/fdds-logo-circle.png"
            alt="FDDS"
            style={{ width: '130px', height: '57px', objectFit: 'contain' }}
          />
        </div>

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
        >
          O nas
        </h2>

        <div
          style={{
            width: '350px',
            fontFamily: "'Lato', sans-serif",
            fontSize: '22px',
            lineHeight: 1.6,
            letterSpacing: '-0.242px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#E83F4B', fontWeight: 600, margin: '0 0 16px' }}>
            W Fundacji Dajemy Dzieciom Siłę od ponad 30 lat chronimy dzieci przed
            przemocą i wykorzystaniem seksualnym.
          </p>
          <p style={{ color: '#1E1E1E', fontWeight: 400, margin: 0 }}>
            Zapewniamy dzieciom i ich opiekunom wsparcie, profesjonalną pomoc
            psychologiczną i prawną. Uczymy dorosłych, jak mądrze i skutecznie
            reagować na przemoc wobec dzieci oraz co robić, gdy podejrzewają, że
            dziecko jest krzywdzone.
          </p>
        </div>

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
        >
          Poznaj nasze działania
        </button>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section data-section="faq-mobile">
        <h2
          style={{
            position: 'absolute',
            left: '50%',
            top: '8066px',
            transform: 'translateX(-50%)',
            width: '350px',
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '82px',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.902px',
            color: '#E83F4B',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Często zadawane pytania
        </h2>

        {/* FAQ Items */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '8384px',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            width: '350px',
          }}
        >
          <FAQItem
            number="01"
            question="Jak rozmawiać z dzieckiem?"
            answer="Nie traktuj rozmowy dotyczącej zasad zachowania bezpieczeństwa jako jednorazowego wydarzenia. Znacznie lepiej jest rozmawiać na te tematy krócej, a częściej. Pomoże to dziecku zapamiętać kluczowe informacje i stosować się do przedstawionych zasad."
            isOpen
          />
          <FAQItem
            number="02"
            question="Czy rozmowa o wykorzystywaniu nie przestraszy dziecka?"
          />
          <FAQItem
            number="03"
            question="Co zrobić, jeśli moje dziecko powie coś, co mnie zaniepokoi?"
          />
        </div>

        {/* CTA Button */}
        <button
          style={{
            position: 'absolute',
            left: '50%',
            top: '9437px',
            transform: 'translateX(-50%)',
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
        >
          Przejdź do FAQ
        </button>

        {/* Dog mascot */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '9793px',
            transform: 'translateX(-50%)',
            width: '231px',
            height: '251px',
          }}
        >
          <img
            src="/assets/piesek.png"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section data-section="contact-mobile">
        {/* For Children */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '10119px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              width: '350px',
              fontFamily: "'Happy Season', sans-serif",
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: 1.5,
              letterSpacing: '-0.396px',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Jeżeli jesteś dzieckiem i trudno Ci porozmawiać z osobą dorosłą z
            Twojego otoczenia...
          </h3>
          <p
            style={{
              width: '350px',
              fontFamily: "'Lato', sans-serif",
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.22px',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Telefon Zaufania dla Dzieci i Młodzieży – 116 111 może Ci pomóc.
            Prowadzimy bezpłatną i anonimową pomoc. Zadzwoń do nas pod numer 116
            111 lub odwiedź naszą stronę internetową{' '}
            <a href="https://116111.pl" style={{ color: '#FFFFFF' }}>
              116111.pl
            </a>
            .
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ContactButton variant="filled">Zadzwoń</ContactButton>
            <ContactButton variant="outlined">Odwiedź stronę</ContactButton>
          </div>
        </div>

        {/* For Parents */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '11168px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              width: '350px',
              fontFamily: "'Happy Season', sans-serif",
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: 1.5,
              letterSpacing: '-0.396px',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Jesteś rodzicem lub nauczycielem i chcesz porozmawiać o
            bezpieczeństwie dziecka?
          </h3>
          <p
            style={{
              width: '350px',
              fontFamily: "'Lato', sans-serif",
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.22px',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Możesz skontaktować się z nami telefonicznie pod numerem Telefonu dla
            Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci: 800 100 100
            lub poprzez stronę{' '}
            <a href="https://800100100.pl" style={{ color: '#FFFFFF' }}>
              800100100.pl
            </a>
            .
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ContactButton variant="filled">Zadzwoń</ContactButton>
            <ContactButton variant="outlined">Odwiedź stronę</ContactButton>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        data-section="footer-mobile"
        style={{
          position: 'absolute',
          left: 0,
          top: '12054px',
          width: '390px',
          height: '1168px',
          backgroundColor: '#F6F5F1',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '312px',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            alignItems: 'flex-start',
          }}
        >
          {/* FDDS Logo */}
          <div style={{ width: '177px', height: '77px' }}>
            <img
              src="/assets/fdds-logo-footer.svg"
              alt="FDDS"
              style={{ width: '100%', height: '100%', transform: 'scaleY(-1)' }}
            />
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
            <a href="#" aria-label="Facebook">
              <img src="/assets/icon-facebook.svg" alt="" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/assets/icon-instagram.svg" alt="" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="#" aria-label="Spotify">
              <img src="/assets/icon-spotify.svg" alt="" style={{ width: '20px', height: '21px' }} />
            </a>
            <a href="#" aria-label="Telegram">
              <img src="/assets/icon-telegram.svg" alt="" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/assets/icon-youtube.svg" alt="" style={{ width: '20px', height: '14px' }} />
            </a>
          </div>

          {/* Kontakt */}
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              lineHeight: 1.5,
              letterSpacing: '-0.176px',
              color: '#E83F4B',
            }}
          >
            <p style={{ fontWeight: 800, margin: '0 0 10px' }}>Kontakt</p>
            <a
              href="mailto:gadki@fdds.pl"
              style={{ color: '#E83F4B', textDecoration: 'none', fontWeight: 500 }}
            >
              gadki@fdds.pl
            </a>
          </div>

          {/* Links Column 1 */}
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: '-0.176px',
              color: '#E83F4B',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none' }}>Dla dzieci</a>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none' }}>Dla rodziców i opiekunów</a>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none' }}>Dla edukatorów</a>
          </div>

          {/* Links Column 2 */}
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              lineHeight: 1.5,
              letterSpacing: '-0.176px',
              color: '#E83F4B',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <p style={{ fontWeight: 800, margin: 0 }}>Logowanie/Rejestracja</p>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none', fontWeight: 500 }}>O programie</a>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none', fontWeight: 500 }}>Для батьків</a>
          </div>

          {/* Bottom Links */}
          <div
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '-0.176px',
              color: '#E83F4B',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none' }}>Polityka prywatności</a>
            <a href="#" style={{ color: '#E83F4B', textDecoration: 'none' }}>Deklaracja dostępności</a>
            <p style={{ margin: 0 }}>
              Zaprojektował i wdrożył <strong>cięty język|</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ========== HELPER COMPONENTS ==========

function MobileGADKICard({ letter, text, color, rotation, zIndex, style }) {
  const isLongText = letter === 'D' || letter === 'K';
  return (
    <div
      style={{
        position: 'absolute',
        width: '284px',
        height: '359px',
        backgroundColor: color,
        borderRadius: '9px',
        transform: `rotate(${rotation}deg)`,
        zIndex,
        overflow: 'hidden',
        ...style,
      }}
    >
      <p
        style={{
          position: 'absolute',
          left: '32px',
          top: letter === 'D' ? '9px' : '15px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '150px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-1.65px',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {letter}
      </p>
      <p
        style={{
          position: 'absolute',
          left: '30px',
          top: isLongText ? '230px' : '263px',
          width: '184px',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '30px',
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.33px',
          color: '#FFFFFF',
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function MaterialCard({ title, children }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '350px',
        height: '442px',
        backgroundColor: '#FFFFFF',
        borderRadius: '11px',
        overflow: 'hidden',
      }}
    >
      <h3
        style={{
          position: 'absolute',
          left: '50%',
          top: '37px',
          transform: 'translateX(-50%)',
          fontFamily: "'Happy Season', sans-serif",
          fontSize: '37px',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-0.405px',
          color: '#E83F4B',
          textAlign: 'center',
          margin: 0,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function FAQItem({ number, question, answer, isOpen = false }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isOpen ? '36px' : '24px',
        borderBottom: '1px solid #E0DDD1',
        paddingBottom: isOpen ? '36px' : '24px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p
          style={{
            fontFamily: "'Happy Season', sans-serif",
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '-0.396px',
            color: '#E83F4B',
            margin: 0,
          }}
        >
          {number}
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              width: '290px',
              fontFamily: "'Happy Season', sans-serif",
              fontSize: '36px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.396px',
              color: '#1E1E1E',
              margin: 0,
            }}
          >
            {question}
          </p>
          <button
            style={{
              width: '44px',
              height: '44px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label={isOpen ? 'Zwiń' : 'Rozwiń'}
          >
            {isOpen ? (
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none">
                <path d="M0 3H24" stroke="#1E1E1E" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0V20M0 10H20" stroke="#1E1E1E" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && answer && (
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '-0.242px',
            color: '#1E1E1E',
            margin: 0,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

function ContactButton({ variant, children }) {
  const baseStyle = {
    width: '281px',
    padding: '20px 24px',
    borderRadius: '48px',
    cursor: 'pointer',
    fontFamily: "'Lato', sans-serif",
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '-0.22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (variant === 'filled') {
    return (
      <button
        style={{
          ...baseStyle,
          backgroundColor: '#FFFFFF',
          border: 'none',
          color: '#E83F4B',
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      style={{
        ...baseStyle,
        backgroundColor: 'transparent',
        border: '2px solid #FFFFFF',
        color: '#FFFFFF',
      }}
    >
      {children}
    </button>
  );
}
