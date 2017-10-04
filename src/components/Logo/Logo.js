import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import LogoImage from './LogoImage';

const RATIO = 3.238710618613727;

const select = theme.register('Logo', (values) => ({
  color: values.colors.black,
  background: values.colors.white,
  strokeWidth: '2px',
  size: '50px',
}))
.addVariant('title', (values) => ({
  size: '15vh',
}))
.addVariant('inverted', (values) => ({
  color: values.colors.white,
  background: values.colors.black,
}))
.addVariant('small', {
  size: '25px',
})
.createSelector();

const LogoImpl = theme.connect(styled.div`
  width: calc(${select('size')} * ${RATIO});
  height: ${select('size')};
  margin: auto;

  & > svg {
    width: calc(${select('size')} * ${RATIO});
    height: ${select('size')};
  }

  & path {
    stroke-width: ${select('strokeWidth')} !important;
    stroke: ${select('color')} !important;
    fill-opacity: 0 !important;
  }

  & .letter {
    fill-opacity: 1 !important;
    fill: ${select('background')} !important;
  }
`);

export const Logo = (props) => <LogoImpl {...props}><LogoImage /></LogoImpl>;

Logo.Inverted = theme.variant('inverted')(Logo);
Logo.Title = theme.variant('title')(Logo);
export default Logo;
