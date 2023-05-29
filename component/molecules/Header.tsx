import { FC } from 'react';
import { FaHome, FaBell, FaUser } from 'react-icons/fa';
import HeaderLink from '../atoms/HeaderLink';

const Header: FC = () => {
  return (
    <header className="header flex space-x-4">
      <HeaderLink page="top" icon={<FaHome />} />
      <HeaderLink page="notice" icon={<FaBell />} />
      <HeaderLink page="account" icon={<FaUser />} />
    </header>
  );
};

export default Header;
