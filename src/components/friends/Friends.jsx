import css from './friends.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          {isOnline === true ? (
            <span className={css.online}></span>
          ) : (
            <span className={css.offline}></span>
          )}

          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
