// 経政会議ページ
import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const KykView: React.FC = () => {
    const mainContent = (
      <div>
        {/* ここにページのメインコンテンツを記述 */}
        経政会議ページです
      </div>
    );
  
    return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};
  
  export default KykView;
  