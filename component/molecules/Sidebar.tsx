import SidebarLink from '../atoms/SidebarLink';

const Sidebar: React.FC = () => {
  const links = [
    { title: '契約一覧', destination: 'kyk_view' },
    { title: '月次報告', destination: 'monthly_report' },
    { title: '経政会議', destination: 'political_economy_meet' },
    { title: '予算', destination: 'budget' },
    { title: 'ダッシュボード', destination: 'dashboard' },
    { title: '管理', destination: 'admin' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <SidebarLink key={index} title={link.title} destination={link.destination} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
