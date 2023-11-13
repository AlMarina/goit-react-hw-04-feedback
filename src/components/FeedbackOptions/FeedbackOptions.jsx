import PropTypes from 'prop-types';
import { List, ListBtn, ListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <ListItem key={option}>
          <ListBtn type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </ListBtn>
        </ListItem>
      ))}
    </List>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
