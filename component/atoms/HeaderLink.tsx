import Link from 'next/link';
import { FC } from 'react';

type HeaderLinkProps = {
  label: string;
  page: string;
  icon?: React.ReactNode;
};

const HeaderLink: FC<HeaderLinkProps> = ({ label, page, icon }) => {
  return (
    <div className="header-link">
      {icon}
      <Link href={`/${page}`}>
        {label}
      </Link>
    </div>
  );
};

export default HeaderLink;
