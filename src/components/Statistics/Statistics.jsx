import PropTypes from 'prop-types';
import {
  Title,
  Board,
  Item,
  List,
  Label,
  LabelValue,
} from './Statistics.styled';
export const Statistics = ({ title = '', stats }) => {
  return (
    <>
      <Title> {title}</Title>
      <Board className="statistics">
        {stats.map(({ id, label, percentage }) => (
          <List key={id}>
            <Item>
              <Label> {label}</Label>
              <LabelValue> {percentage}%</LabelValue>
            </Item>
          </List>
        ))}
      </Board>
    </>
  );
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
