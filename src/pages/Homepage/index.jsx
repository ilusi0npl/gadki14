import { ResponsiveWrapper } from '../../components/ResponsiveWrapper';
import DesktopHomepage from './DesktopHomepage';
import MobileHomepage from './MobileHomepage';

export default function Homepage() {
  return (
    <main>
      <ResponsiveWrapper
        desktopContent={<DesktopHomepage />}
        mobileContent={<MobileHomepage />}
        desktopHeight={9567}
        mobileHeight={13222}
      />
    </main>
  );
}
