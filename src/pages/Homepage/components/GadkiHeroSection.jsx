export default function GadkiHeroSection() {
  return (
    <section
      className="relative bg-fdds-red"
      style={{ position: 'relative', width: '1728px', height: '1176px', margin: '0 auto' }}
      data-section="hero"
      data-node-id="30:294"
    >
      <img
        src="/assets/hero-bg-red-wave.svg"
        alt=""
        className="absolute inset-0"
        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
        aria-hidden="true"
      />

      <header
        className="absolute z-50 flex items-center justify-between"
        style={{ position: 'absolute', top: '64px', left: '68px', right: '68px' }}
        data-section="header"
      >
        <img
          src="/assets/fdds-logo.svg"
          alt="Fundacja Dajemy Dzieciom Siłę"
          style={{ width: '175px', height: '76px' }}
          data-node-id="23:4"
        />
        <button
          className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-fdds-red"
          style={{ width: '60px', height: '46px' }}
          aria-label="Menu"
          data-node-id="32:541"
        >
          <img
            src="/assets/hamburger-icon.svg"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </button>
      </header>

      <div
        className="absolute rounded-full bg-[#e0ddd1] overflow-hidden"
        style={{ position: 'absolute', left: '1266px', top: '545px', width: '180px', height: '180px' }}
        data-node-id="2007:205"
      >
        <img
          src="/assets/avatar-max.png"
          alt="Max"
          style={{
            position: 'absolute',
            left: '0',
            top: '30px',
            width: '180px',
            height: '586px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        className="absolute rounded-full bg-[#e0ddd1] overflow-hidden"
        style={{ position: 'absolute', left: '1176px', top: '224px', width: '180px', height: '180px' }}
        data-node-id="2007:208"
      >
        <img
          src="/assets/avatar-tata.png"
          alt="Tata"
          style={{
            position: 'absolute',
            left: '3px',
            top: '20px',
            width: '177px',
            height: '596px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        className="absolute rounded-full bg-[#e0ddd1] overflow-hidden"
        style={{ position: 'absolute', left: '774px', top: '80px', width: '180px', height: '180px' }}
        data-node-id="2007:212"
      >
        <img
          src="/assets/avatar-gadek.png"
          alt="Gadek"
          style={{
            position: 'absolute',
            left: '38px',
            top: '24px',
            width: '258px',
            height: '268px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        className="absolute rounded-full bg-[#e0ddd1] overflow-hidden"
        style={{ position: 'absolute', left: '374px', top: '155px', width: '180px', height: '180px' }}
        data-node-id="2007:220"
      >
        <img
          src="/assets/avatar-mama.png"
          alt="Mama"
          style={{
            position: 'absolute',
            left: '2px',
            top: '17px',
            width: '177px',
            height: '632px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        className="absolute rounded-full bg-[#e0ddd1] overflow-hidden"
        style={{ position: 'absolute', left: '274px', top: '618px', width: '180px', height: '180px' }}
        data-node-id="2007:224"
      >
        <img
          src="/assets/avatar-corka.png"
          alt="Córka"
          style={{
            position: 'absolute',
            left: '8px',
            top: '28px',
            width: '165px',
            height: '538px',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        className="absolute"
        style={{ position: 'absolute', left: '574px', top: '429px', width: '580px' }}
        data-node-id="50:64"
      >
        <img
          src="/assets/gadki-wordmark.svg"
          alt="GADKI"
          style={{
            display: 'block',
            width: '100%',
            height: '267px',
            objectFit: 'contain'
          }}
          data-node-id="30:290"
        />
        <p
          className="font-happy-season font-semibold text-white text-center"
          style={{
            marginTop: '12px',
            fontSize: '44px',
            lineHeight: '1.5',
            letterSpacing: '-0.484px'
          }}
          data-node-id="50:51"
        >
          Program wzmacniania bezpieczeństwa dzieci
        </p>
      </div>

      <div
        className="absolute rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
        style={{ position: 'absolute', left: '274px', top: '866px', width: '1180px', height: '622px' }}
        data-node-id="39:692"
        role="button"
        tabIndex={0}
        aria-label="Odtwórz wideo wprowadzające"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
          }
        }}
      >
        <img
          src="/assets/hero-video-thumb.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-200"
            style={{
              width: '192px',
              height: '192px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/assets/play-icon.svg"
              alt=""
              style={{ width: '100%', height: '100%' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
