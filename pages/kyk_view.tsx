import PageWithHeaderAndSidebar from '../component/template/PageWithHeaderAndSidebar';

const KykView: React.FC = () => {
  const mainContent = (
    <div>
      {/* ここにページのメインコンテンツを記述 */}
      契約一覧画面です
    </div>
  );

  return <PageWithHeaderAndSidebar mainContent={mainContent} />;
};

export default KykView;
