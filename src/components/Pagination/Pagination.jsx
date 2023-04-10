import { PaginationItem } from './PaginationItem';
import arrowDarkIcon from '../../assets/icons/arrow-dark.svg';
import './Pagination.scss';

export const Pagination = () => {
  const paginationItems = [1, 2, 3, 4, "...", 40];

  return (
    <div className="pagination">
      <p className="pagination__info">
        Showing data 1 to 8 of 256K entries
      </p>
      <div className="pagination__control">
        <button className="pagination__button" onClick={() => {}}>
          <img src={arrowDarkIcon} alt="arrow" />
        </button>
        <ul className="pagination__list">
          {paginationItems.map(item => (
            <PaginationItem key={item} item={item} />
          ))}
        </ul>
        <button className="pagination__button pagination__button--next" onClick={() => {}}>
          <img src={arrowDarkIcon} alt="arrow" />
        </button>
      </div>
    </div>
  );
};
