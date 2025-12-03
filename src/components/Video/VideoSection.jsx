export default function VideoSection() {
  const handlePlay = () => {
    console.log('Play video');
  };

  return (
    <div
      className="absolute rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
      style={{
        position: 'absolute',
        left: '274px',
        top: '866px',
        width: '1180px',
        height: '622px',
      }}
      role="button"
      tabIndex={0}
      aria-label="Odtwórz wideo wprowadzające"
      onClick={handlePlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlay();
        }
      }}
      data-node-id="39:692"
    >
      <img
        src="/assets/hero-video-thumb.jpg"
        alt="Rodzina GADKI na kanapie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 group-hover:scale-110 group-focus:scale-110 transition-transform duration-200">
          <img
            src="/assets/play-icon.svg"
            alt=""
            className="w-full h-full"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
