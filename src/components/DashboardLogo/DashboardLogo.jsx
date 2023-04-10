import logo from '../../assets/icons/logo.svg';
import './DashboardLogo.scss';

export const DashboardLogo = () => {
  return (
    <a href="#" className="logo">
      <img className="logo__image" src={logo} alt="logo" />
      <span className="logo__text">Dashboard</span>
    </a>
  );
};
