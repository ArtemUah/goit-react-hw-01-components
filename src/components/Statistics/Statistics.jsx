import { StatisticItem } from './StatisticItem';
import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(item => {
          return <StatisticItem item={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
