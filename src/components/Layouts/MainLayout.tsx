import './MainLayoutStyle.css';

interface MainLayoutProps {
  appBar: React.ReactNode;
  navigationMenu: React.ReactNode;
  content: React.ReactNode;
}

const MainLayout = ({ appBar, navigationMenu, content }: MainLayoutProps) => {
  return (
    <div className="main-container">
      <div className="navigation-menu-container">{navigationMenu}</div>
      <div className="app-bar-container">{appBar}</div>
      <div className="content-container">
        <div className="info">{content}</div>
      </div>
    </div>
  );
};

export default MainLayout;
