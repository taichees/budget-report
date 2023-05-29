import HeaderLink from '../atoms/HeaderLink';
import { FC } from 'react';
import { FaHome, FaBell, FaUser } from 'react-icons/fa';

//icon={<SomeIcon />}を加えればアイコンで表示できる
const Header: FC = () => {
    return (
        <header className="header">
            <div className="page-container" style={{ display: 'flex' }}>
                <HeaderLink page="top" icon={<FaHome />} />
                <HeaderLink page="notice" icon={<FaBell />} />
                <HeaderLink page="account" icon={<FaUser />} />
            </div>
        </header>
    );
};

export default Header;
