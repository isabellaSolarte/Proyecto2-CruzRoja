/* eslint-disable react/no-string-refs */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-useless-template-literals */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useTheme } from '@mui/material';
import './MainLayoutStyle.css';
import { NavigationProccessButton } from '../Molecules/NavigationProccessButton';

interface MainLayoutProps {
  appBar: React.ReactNode;
  navigationMenu: React.ReactNode;
  content: React.ReactNode;
}

const hexToRGBA = (hexColor: string, alpha: number) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const MainLayout = ({ appBar, navigationMenu, content }: MainLayoutProps) => {
  const theme = useTheme();

  return (
    <div className="main-container">
      <div className="navigation-menu-container">{navigationMenu}</div>
      <div className="app-bar-container">{appBar}</div>
      <div
        className="content-container"
        style={{
          backgroundColor: theme.backgroundContentColors?.contentBox,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <NavigationProccessButton />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <img src="/public/Tress.svg" style={{ maxWidth: '500rem' }} />
        </div>

        <div
          className="info"
          style={{
            backgroundColor: `${
              theme.backgroundContentColors?.contentBox &&
              hexToRGBA(theme.backgroundContentColors.contentBox, 0.8)
            }`,
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
