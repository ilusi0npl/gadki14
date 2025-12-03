export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[68px] pt-[64px] pb-[20px]" data-section="header">
      <img
        src="/assets/fdds-logo.svg"
        alt="Fundacja Dajemy Dzieciom Siłę"
        className="w-[175px] h-[76px]"
        data-node-id="23:4"
      />
      <button
        className="w-[60px] h-[46px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-fdds-red"
        aria-label="Menu"
        data-node-id="32:541"
      >
        <img
          src="/assets/hamburger-icon.svg"
          alt=""
          className="w-full h-full"
        />
      </button>
    </header>
  );
}
