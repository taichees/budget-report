// 管理ページ
import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const Admin: React.FC = () => {
  const mainContent = (
    <div>
      <h1>管理ページ</h1>
      <p>Welcome to the admin page.</p>
    </div>
  );

  return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};

export default Admin;

