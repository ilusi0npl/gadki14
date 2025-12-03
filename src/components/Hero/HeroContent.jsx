export default function HeroContent() {
  return (
    <div
      className="absolute z-20"
      style={{
        position: 'absolute',
        left: '374px',
        top: '429px',
        width: '980px',
        textAlign: 'center',
      }}
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
        className="font-display font-semibold text-white text-center whitespace-nowrap"
        style={{
          marginTop: '12px',
          fontSize: '44px',
          lineHeight: '1.5',
          letterSpacing: '-0.484px',
        }}
        data-node-id="50:51"
      >
        Program wzmacniania bezpieczeństwa dzieci
      </p>
    </div>
  );
}
