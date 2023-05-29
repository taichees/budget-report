import Link from 'next/link';
import { FC } from 'react';

type HeaderLinkProps = {
  page: string;
  icon?: React.ReactNode;
};

const HeaderLink: FC<HeaderLinkProps> = ({ page, icon }) => {
  return (
    <Link href={`/${page}`}>
      <div className="header-link">
        {icon}
      </div>
    </Link>
  );
};

export default HeaderLink;
