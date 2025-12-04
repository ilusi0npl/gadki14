import { HeroSection, VideoThumbnail } from '../../components/Hero';
import { IntroSection } from '../../components/Intro';
import { ZasadySection } from '../../components/Zasady';
import { MaterialySection } from '../../components/Materialy';
import { ONasSection } from '../../components/ONas';
import { FAQSection } from '../../components/FAQ';
import { ContactSection } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function DesktopHomepage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '1728px',
        minHeight: '9567px',
        backgroundColor: '#EFEEE8',
      }}
    >
      {/* Hero background - Red Union shape from y=0 to ~y=1176 */}
      <div
        style={{
          position: 'absolute',
          left: '-11.15px',
          top: '0',
          width: '1749.476px',
          height: '1176.468px',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/hero-union-bg.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Zasady background - Union shape from y=2950 to ~y=4301 */}
      <div
        style={{
          position: 'absolute',
          left: '-1.13px',
          top: '2950.17px',
          width: '1730.257px',
          height: '1351.512px',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/zasady-union-bg.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Page sections */}
      <HeroSection />
      <VideoThumbnail />
      <IntroSection />
      <ZasadySection />
      <MaterialySection />
      <ONasSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
