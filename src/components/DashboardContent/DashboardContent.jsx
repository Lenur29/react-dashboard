import { CustomersData } from '../CustomersData';
import './DashboardContent.scss';

export const DashboardContent = () => {
  return (
    <div className="content">
      <div className="dashboard-content">
        <h1 className="greeting-title">Hello Evano 👋🏼,</h1>
        <CustomersData />
      </div>
    </div>
  );
};
