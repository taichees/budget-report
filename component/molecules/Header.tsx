import HeaderLink from '../atoms/HeaderLink';
import { FC } from 'react';

//icon={<SomeIcon />}を加えればアイコンで表示できる
const Header: FC = () => {
    return (
        <header className="header">
            <div className="page-container" style={{ display: 'flex' }}>
                <HeaderLink label="TOPロゴ　" page="top" />
                <HeaderLink label="通知機能　" page="notice" />
                <HeaderLink label="アカウント　" page="account" />
            </div>
        </header>
    );
};

export default Header;
