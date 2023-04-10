import cn from 'classnames';
import './CustomerInfo.scss';

export const CustomerInfo = ({ customer }) => {
  const { name, company, phoneNumber, email, country, status } = customer;
  const isActive = status === 'Active';

  return (
    <tr
      className="table__body-row"
    >
      <td className="table__body-cell">{name}</td>
      <td className="table__body-cell">{company}</td>
      <td className="table__body-cell">{phoneNumber}</td>
      <td className="table__body-cell">{email}</td>
      <td className="table__body-cell">{country}</td>
      <td className="table__body-cell">
        <button className={cn("table__status-button", { "table__status-button--active": isActive })}>
          {isActive ? "Active" : "Inactive"}
        </button>
      </td>
    </tr>
  );
};
