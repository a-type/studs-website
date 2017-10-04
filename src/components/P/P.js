import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('P', (values) => ({
  fontFamily: values.fonts.default,
  fontSize: '1em',
  lineHeight: '1.5',
  margin: `${values.spacing.medium} 0`,
  color: 'inherit',
}))
.addVariant('tight', {
  margin: 0,
}).createSelector();

const PImpl = theme.connect(styled.p`
  ${spreadStyles(select)}
`);

export const P = (props) => <PImpl {...props} />;

PImpl.Tight = theme.variant('tight')(PImpl);
export default PImpl;
