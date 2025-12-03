import Header from '../Header/Header';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import AvatarsGroup from './AvatarsGroup';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        position: 'relative',
        width: '1728px',
        height: '865px',
        margin: '0 auto',
      }}
      data-section="hero"
      data-node-id="30:294"
    >
      <HeroBackground />
      <Header />
      <AvatarsGroup />
      <HeroContent />
    </section>
  );
}
