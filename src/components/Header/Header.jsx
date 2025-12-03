import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header
      className="absolute z-50"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '140px',
      }}
      data-section="header"
    >
      {/* FDDS Logo - top left */}
      <div style={{ position: 'absolute', top: '64px', left: '68px' }}>
        <Logo />
      </div>
      {/* Hamburger Menu - top right */}
      <div style={{ position: 'absolute', top: '64px', right: '68px' }}>
        <HamburgerMenu />
      </div>
    </header>
  );
}
