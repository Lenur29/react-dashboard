import cn from 'classnames';
import './PaginationItem.scss';

export const PaginationItem = ({ item }) => {
  return (
    <li className={cn("pagination__item", { "pagination__item--active": item === 1 })}>{item}</li>
  );
};
