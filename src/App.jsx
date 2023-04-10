import { Sidebar } from './components/Sidebar';
import { DashboardContent } from './components/DashboardContent';
import './App.scss';

export const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};
