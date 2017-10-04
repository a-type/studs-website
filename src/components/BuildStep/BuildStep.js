import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import styled, { css } from 'styled-components';
import P from '../P';

const select = theme.register('BuildStep', (values) => ({
  background: values.colors.white,
  borderColor: values.colors.quaternary,
  borderWidth: values.widths.border,
  borderStyle: values.styles.border,
  color: values.colors.gray,
  padding: values.spacing.large,
  margin: values.spacing.large,
  maxWidth: '600px',
  pieces: {
    background: values.colors.grayLightest,
    borderRadius: '20px',
    borderWidth: values.widths.border,
    borderStyle: values.styles.border,
    borderColor: values.colors.quaternary,
    padding: values.spacing.large,
    margin: values.spacing.small,
    scribbleFontFamily: values.fonts.scribble,
    scribbleColor: values.colors.quinary,
  },
  stepNumber: {
    fontSize: '40px',
    fontWeight: 600,
    padding: `${values.spacing.medium} ${values.spacing.small}`,
  },
  details: {
    padding: '0',
  },
})).createSelector();
const pSelect = (val) => select('pieces.' + val);

const Container = theme.connect(styled.div`
  background: ${select('background')};
  color: ${select('color')};
  border-color: ${select('borderColor')};
  border-width: ${select('borderWidth')};
  padding: ${select('padding')};
  margin: ${select('margin')};
  max-width: ${select('maxWidth')};
  border-style: ${select('borderStyle')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin-left: 0;
    margin-right: auto;
  }
`);

const PiecesContainer = theme.connect(styled.div`
  background: ${pSelect('background')};
  border-width: ${pSelect('borderWidth')};
  border-color: ${pSelect('borderColor')};
  border-radius: ${pSelect('borderRadius')};
  border-style: ${pSelect('borderStyle')};
  padding: ${pSelect('padding')};
  margin: ${pSelect('margin')};
  display: flex;
  flex-direction: row;
  position: relative;

  &::after {
    position: absolute;
    left: calc(100% + 8px);
    top: 0px;
    width: 80px;
    content: '${({ scribble }) => scribble}';
    font-family: ${pSelect('scribbleFontFamily')};
    color: ${pSelect('scribbleColor')};
    transform: rotate(20deg);
  }
`);

const Number = theme.connect(styled.h2`
  font-size: ${select('stepNumber.fontSize')};
  font-weight: ${select('stepNumber.fontWeight')};
  margin: auto 0;
  padding: ${select('stepNumber.padding')};
`);

const Display = theme.connect(styled.div`
  margin: auto !important;
  & > div {
    position: relative;
  }
`);

const Details = theme.connect(styled.div`
  padding: ${select('details.padding')};
`);

export default class BuildStep extends React.Component {
  static propTypes = {
    number: PropTypes.number,
    pieces: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.node,
      count: PropTypes.number,
    })),
    children: PropTypes.node.isRequired,
    details: PropTypes.string.isRequired,
    scribble: PropTypes.string,
  };

  static defaultProps = {
    number: null,
    pieces: null,
    scribble: null,
  };

  renderPiece = ({ display, count }, index) => (
    <div style={{ position: 'relative' }} key={index}>
      {display}
      <div style={{ position: 'absolute', bottom: '-8px', right: '0px', fontSize: '9px', fontWeight: 600 }}>
        x {count}
      </div>
    </div>
  );

  renderPieces = () => {
    const { pieces, scribble } = this.props;
    return (
      <PiecesContainer scribble={scribble}>
        {pieces.map(this.renderPiece)}
      </PiecesContainer>
    );
  };

  render() {
    const { number, pieces, children, details } = this.props;
    return (
      <Container>
        {pieces && this.renderPieces()}
        {number && <Number>{number}</Number>}
        <Display>{children}</Display>
        <Details><P.Tight>{details}</P.Tight></Details>
      </Container>
    );
  }
}
