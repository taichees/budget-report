import Link from 'next/link';

type SidebarLinkProps = {
  title: string;
  destination: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, destination }) => {
  return (
    <li>
      <Link href={`/${destination}`}>
        {title}
      </Link>
    </li>
  );
};

export default SidebarLink;
