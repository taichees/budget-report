// アカウントページ
import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const KykView: React.FC = () => {
    const mainContent = (
      <div>
        {/* ここにページのメインコンテンツを記述 */}
       アカウントページです
      </div>
    );
  
    return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};
  
  export default KykView;
  