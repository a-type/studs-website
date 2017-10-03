import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Logo', (values) => ({
  fontFamily: values.fonts.brand,
  fontSize: '20vh',
  color: values.colors.primary,
}))
.addVariant('inverted', (values) => ({
  color: values.colors.primaryContrast,
}))
.createSelector();

const LogoImpl = theme.connect(styled.h1`
  ${spreadStyles(select)}
  margin: 0;
`);

export const Logo = (props) => <LogoImpl {...props} />;

LogoImpl.Inverted = theme.variant('inverted')(LogoImpl);
export default LogoImpl;
