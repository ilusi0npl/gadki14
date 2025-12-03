import Avatar from './Avatar';

const AVATARS = [
  {
    name: 'Gadek',
    src: '/assets/avatar-gadek.png',
    nodeId: '2007:212',
    position: { top: 80, left: 774 },
    imageStyle: { left: '38px', top: '24px', width: '258px', height: '268px' },
  },
  {
    name: 'Mama',
    src: '/assets/avatar-mama.png',
    nodeId: '2007:220',
    position: { top: 155, left: 374 },
    imageStyle: { left: '2px', top: '17px', width: '177px', height: '632px' },
  },
  {
    name: 'Tata',
    src: '/assets/avatar-tata.png',
    nodeId: '2007:208',
    position: { top: 224, left: 1176 },
    imageStyle: { left: '3px', top: '20px', width: '177px', height: '596px' },
  },
  {
    name: 'Córka',
    src: '/assets/avatar-corka.png',
    nodeId: '2007:224',
    position: { top: 618, left: 274 },
    imageStyle: { left: '8px', top: '28px', width: '165px', height: '538px' },
  },
  {
    name: 'Max',
    src: '/assets/avatar-max.png',
    nodeId: '2007:205',
    position: { top: 545, left: 1266 },
    imageStyle: { left: '0', top: '30px', width: '180px', height: '586px' },
  },
];

export default function AvatarsGroup() {
  return (
    <>
      {AVATARS.map((avatar) => (
        <div
          key={avatar.name}
          className="absolute"
          style={{
            position: 'absolute',
            top: `${avatar.position.top}px`,
            left: `${avatar.position.left}px`,
          }}
        >
          <Avatar
            src={avatar.src}
            alt={avatar.name}
            nodeId={avatar.nodeId}
            imageStyle={avatar.imageStyle}
          />
        </div>
      ))}
    </>
  );
}
