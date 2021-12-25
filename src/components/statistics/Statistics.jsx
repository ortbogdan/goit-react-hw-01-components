import PropTypes from 'prop-types';
import { StatisticsContainer } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsContainer>
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
// export const Statistics = ({ stats }) => {
//   return (
//     <section className="statistics">
//     <h2 className="title">Upload stats</h2>
//     <ul className="stat-list">
//       {stats.map(book => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//           </ul>
//           </section>
//   );
// };
