import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatsList,
  StatsListItem,
  FileFormat,
  Percentage,
} from './Statistics.styled';
import { getRandomRgbColor } from './service/getRandomRgbColor';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsListItem key={id} color={getRandomRgbColor()}>
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
