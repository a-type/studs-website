import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('H1', (values) => ({
  fontFamily: values.fonts.brand,
  margin: 0,
  padding: 0,
  textTransform: 'uppercase',
  fontSize: '2.5em',
})).createSelector();

const H1Impl = theme.connect(styled.h1`
  ${spreadStyles(select)}
`);

export const H1 = (props) => <H1Impl {...props} />;

export default H1;
