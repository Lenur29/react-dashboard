import { CustomerInfo } from './CustomerInfo';
import './CustomersDataTable.scss';

export const CustomersDataTable = ({ customers }) => {
  return (
    <table className='table'>
      <thead className='table__header'>
        <tr className='table__header-row'>
          <th className='table__header-cell'>Customer Name</th>
          <th className='table__header-cell'>Company</th>
          <th className='table__header-cell'>Phone Number</th>
          <th className='table__header-cell'>Email</th>
          <th className='table__header-cell'>Country</th>
          <th className='table__header-cell'>Status</th>
        </tr>
      </thead>
      <tbody className='table__body'>
        {customers?.map((customer) => (
          <CustomerInfo
            key={customer.id}
            customer={customer}
          />
        ))}
      </tbody>
    </table>
  );
};
