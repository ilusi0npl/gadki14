export default function HamburgerMenu({ onClick }) {
  return (
    <button
      className="flex items-center justify-center w-[60px] h-[46px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-raspberry"
      aria-label="Menu"
      aria-expanded="false"
      onClick={onClick}
      data-node-id="32:541"
    >
      <img
        src="/assets/hamburger-icon.svg"
        alt=""
        className="w-full h-full"
        aria-hidden="true"
      />
    </button>
  );
}
