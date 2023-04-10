import { useState, useCallback, useMemo } from 'react';
import { CustomersDataTable } from './CustomersDataTable';
import { Pagination } from '../Pagination';
import { customers } from '../../consts/customers';
import { debounce } from '../../services/debounce';
import './CustomersData.scss';

export const CustomersData = () => {
  const [appliedQuery, setAppliedQuery] = useState('');

  const handleQuery = useCallback(debounce(setAppliedQuery, 1000), []);
  const filteredCustomers = useMemo(() => {
    const lowerCaseQuery = appliedQuery.toLowerCase();

    if (!appliedQuery) {
      return customers;
    }

    return customers.filter(customer => {
      return Object.entries(customer).some(([key, value]) => {
        if (typeof value === 'string') {
          const lowerCaseValue = value.toLowerCase()

          if (key === 'status') {
            return lowerCaseValue === lowerCaseQuery;
          }
          return lowerCaseValue.includes(lowerCaseQuery);
        }

        return false;
      });
    });
  }, [appliedQuery]);

  return (
    <div className="customers">
      <div className="customers__container">
        <div className="customers__common-info">
          <h1 className="customers__title">All Customers</h1>
          <p className="customers__subtitle">Active Members</p>
        </div>
        <input
          className="customers__search"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(event) => handleQuery(event.target.value)}
        />
      </div>
      <CustomersDataTable
        customers={filteredCustomers}
      />
      <Pagination />
    </div>
  );
};
