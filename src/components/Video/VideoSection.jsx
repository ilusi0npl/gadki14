export default function VideoSection() {
  const handlePlay = () => {
    console.log('Play video');
  };

  return (
    <section
      className="relative"
      style={{
        width: '1728px',
        height: '625px',
        margin: '0 auto',
        marginTop: '-260px',
      }}
      data-section="video"
      data-node-id="39:692"
    >
      <div
        className="absolute rounded-xl overflow-hidden group cursor-pointer"
        style={{
          left: '274px',
          top: '0px',
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
      >
        <img
          src="/assets/video-thumbnail.png"
          alt="Piesek GADKI na kanapie"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          data-node-id="39:693"
        />

        <div
          className="absolute inset-0 bg-black/40 rounded-xl"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{ width: '88px', height: '112px' }}
            data-node-id="39:695"
          >
            <img
              src="/assets/play-icon.svg"
              alt=""
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
