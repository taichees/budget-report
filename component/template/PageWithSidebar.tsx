import Sidebar from '../molecules/Sidebar';

type PageWithSidebarProps = {
  mainContent: React.ReactNode;
};

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ mainContent }) => {
  return (
    <div className="page-container" style={{ display: 'flex' }}>
      <Sidebar />
      <main>{mainContent}</main>
    </div>
  );
};

export default PageWithSidebar;
