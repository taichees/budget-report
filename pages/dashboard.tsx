// ダッシュボードページ
import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const KykView: React.FC = () => {
    const mainContent = (
      <div>
        {/* ここにページのメインコンテンツを記述 */}
        ダッシュボードページです
      </div>
    );
  
    return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};
  
  export default KykView;
  