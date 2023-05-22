import Header from '../molecules/Header';
import { FC } from 'react';

type PageWithHeaderProps = {
  mainContent: React.ReactNode;
};

const PageWithHeader: FC<PageWithHeaderProps> = ({ mainContent }) => {
  return (
    <div className="page-container">
      <Header />
      <main>{mainContent}</main>
    </div>
  );
};

export default PageWithHeader;
