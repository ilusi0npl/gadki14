export default function Avatar({
  src,
  alt,
  size = 180,
  imageStyle = {},
  className = '',
  nodeId,
}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: '#E0DDD1',
        overflow: 'hidden',
        position: 'relative',
      }}
      className={className}
      data-node-id={nodeId}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          objectFit: 'cover',
          width: imageStyle.width || '100%',
          height: imageStyle.height || '100%',
          left: imageStyle.left || 0,
          top: imageStyle.top || 0,
        }}
      />
    </div>
  );
}
