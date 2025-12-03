import Header from '../Header/Header';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import AvatarsGroup from './AvatarsGroup';
import VideoSection from '../Video/VideoSection';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        position: 'relative',
        width: '1750px',
        height: '1177px',
        margin: '0 auto',
      }}
      data-section="hero"
      data-node-id="30:294"
    >
      <HeroBackground />
      <Header />
      <AvatarsGroup />
      <HeroContent />
      <VideoSection />
    </section>
  );
}
