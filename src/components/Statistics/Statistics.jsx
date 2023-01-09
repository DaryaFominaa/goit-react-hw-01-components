import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2> {title}</h2>
      {stats.map(({ id, label, percentage }) => (
        <ul key={id}>
          <li>
            <span> {label}</span>
            <span> {percentage}</span>
          </li>
        </ul>
      ))}
    </section>
  );
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
