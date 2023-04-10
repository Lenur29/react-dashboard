import personImage from '../../assets/images/person.png';
import './PersonInfo.scss';

export const PersonInfo = () => {
  return (
    <div className="person-info">
      <img className="person-info__image" src={personImage} alt="person" />
      <div className="person-info__content">
        <p className="person-info__name">Evano</p>
        <p className="person-info__role">Project Manager</p>
      </div>
    </div>
  );
};
