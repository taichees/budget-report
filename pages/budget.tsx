// 予算ページ
import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const KykView: React.FC = () => {
    const mainContent = (
      <div>
        {/* ここにページのメインコンテンツを記述 */}
        予算ページです
      </div>
    );
  
    return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};
  
  export default KykView;
  