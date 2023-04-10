import { useState } from 'react';
import cn from 'classnames';
import { DashboardList } from '../DashboardList';
import { DashboardLogo } from '../DashboardLogo';
import { menuIcon, closeIcon } from '../../assets/icons';
import { PersonInfo } from '../PersonInfo';
import './Sidebar.scss';

export const Sidebar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className="menu">
        <div className="menu__panel">
          <DashboardLogo />
          <button className="menu__button" onClick={toggleMenu}>
            <img className="menu__icon" src={menuIcon} alt="menu" />
          </button>
        </div>
        <div className={cn("menu__content", { "menu__content--active": isMenuActive })}>
          <DashboardList />
          <PersonInfo />
          <button
            type="button"
            onClick={toggleMenu}
            className="menu__close-button"
          >
            <img src={closeIcon} alt="close" />
          </button>
        </div>
      </div>
      <div className="sidebar">
        <DashboardLogo />
        <DashboardList />
        <PersonInfo />
      </div>
    </>
  );
};
