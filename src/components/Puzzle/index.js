import c from 'classnames';
import CircleSmallIcon from 'mdi-react/CircleSmallIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collapsible from '../Collapsible';
import Decklist from '../Decklist';
import useStyles from './styles';


export default function Puzzle({ barf, component, data, words }) {

  const classes = useStyles();
  const {
    deckFile,
    notes,
    oppBoard,
    oppHand,
    solution,
    solutionNotes,
    title,
    yourBoard,
    yourHand,
  } = data;

  const listify = (value, highlight) => {
    value = value && (Array.isArray(value) ? value : [value]) || [];
    return value.length ? (
      <Box display="flex" flexWrap="wrap">
        {value.map((it, index, array) => (
          <Box alignItems="center" display="flex" key={index}>
            {highlight && words.length ? (
              <Highlighter highlightClassName={classes.highlight}
                           searchWords={words}
                           textToHighlight={it} />
            ) : it}
            {index < array.length - 1 && <CircleSmallIcon size="1em" />}
          </Box>
        ))}
      </Box>
    ) : '';
  };

  const rows = [
    {label: "Opponent's Hand", text: listify(oppHand, true)},
    {label: "Opponent's Board", text: listify(oppBoard, true)},
    {label: 'Your Hand', text: listify(yourHand, true)},
    {label: 'Your Board', text: listify(yourBoard, true)},
  ].filter(it => it.text);

  return React.createElement(component, null, (
    <>
      <Typography component="h4" paragraph variant="h4">
        <Highlighter highlightClassName={classes.highlight}
                     searchWords={words}
                     textToHighlight={title} />
      </Typography>
      <Box className={c({[classes.barf]: barf})} my={2}>
        <Decklist collapsible path={deckFile} />
      </Box>
      {notes && (
        <Typography paragraph>
          <Highlighter highlightClassName={classes.highlight}
                       searchWords={words}
                       textToHighlight={notes} />
        </Typography>
      )}
      {!!rows.length && (
        <Typography container className={classes.situation} component={Grid}>
          {rows.map((it, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={4} md={3} children={it.label} />
              <Grid item xs={12} sm={8} md={9} children={it.text} />
            </React.Fragment>
          ))}
        </Typography>
      )}
      <Box className={c({[classes.barf]: barf})} mt={2}>
        <Collapsible title="Solution">
          <Typography children={listify(solution)} component="div" paragraph />
          <Typography children={solutionNotes} />
        </Collapsible>
      </Box>
    </>
  ));
}


Puzzle.defaultProps = {
  component: 'div',
  words: [],
};


Puzzle.propTypes = {
  barf: PropTypes.bool,
  component: PropTypes.elementType,
  data: PropTypes.shape({
    authors: PropTypes.array,
    deckFile: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    oppBoard: PropTypes.array,
    oppHand: PropTypes.array,
    solution: PropTypes.array.isRequired,
    solutionNotes: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    yourBoard: PropTypes.array,
    yourHand: PropTypes.array,
  }),
  words: PropTypes.arrayOf(PropTypes.string),
};
