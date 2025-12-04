export default function VideoThumbnail() {
  const handlePlay = () => {
    console.log('Play video');
  };

  return (
    <section
      style={{
        position: 'absolute',
        left: '0',
        top: '865px',
        width: '1728px',
        height: '625px',
      }}
      data-section="video"
    >
      <div
        className="rounded-xl overflow-hidden group cursor-pointer"
        style={{
          position: 'absolute',
          left: '274px',
          top: '1px',
          width: '1180px',
          height: '622px',
          zIndex: 20,
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
        src="/assets/video-thumbnail.jpg"
        alt="Piesek GADKI na kanapie"
        className="object-cover rounded-xl"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
        data-node-id="39:693"
      />

      <div
        className="rounded-xl"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
