import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatsList,
  StatsListItem,
  FileFormat,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsListItem key={id} color={getRandomHexColor()}>
              <FileFormat>{label}</FileFormat>
              <Percentage>{percentage}</Percentage>
            </StatsListItem>
          );
        })}
      </StatsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
function getRandomHexColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`;
}
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
