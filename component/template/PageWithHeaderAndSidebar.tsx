import Header from '../molecules/Header';
import Sidebar from '../molecules/Sidebar';
import { FC } from 'react';

type PageWithHeaderAndSidebarProps = {
  mainContent: React.ReactNode;
};

const PageWithHeaderAndSidebar: FC<PageWithHeaderAndSidebarProps> = ({ mainContent }) => {
  return (
    <div className="page-container">
      <Header />
      <div className="page-container" style={{ display: 'flex' }}>
      <Sidebar />
      <main>{mainContent}</main>
      </div>
    </div>
  );
};

export default PageWithHeaderAndSidebar;
