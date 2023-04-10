import { dashboardNavItems } from "../../consts/dashboardNavItems";
import { arrowIcon, arrowWhiteIcon } from "../../assets/icons";
import './DashboardList.scss';

export const DashboardList = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {dashboardNavItems.map(item => (
          <li key={item.id} className="nav__item">
            <a href={item.link} className="nav__link">
              <img src={item.icon} className="nav__icon" alt={item.id} />
              <span className="nav__title">{item.title}</span>
              <img className="nav__arrow-icon" src={ item.id === "customers" ? arrowWhiteIcon : arrowIcon } alt="arrow" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
