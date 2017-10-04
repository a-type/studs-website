import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import BlockImage from './BlockImage';

const select = theme.register('Block', (values) => ({
  background: values.colors.white,
  color: values.colors.black,
  size: '50px',
  strokeWidth: '1px',
  opacity: 1,
}))
.addVariant('small', {
  size: '25px',
  strokeWidth: '2px',
})
.addVariant('tiny', {
  size: '12.5px',
  strokeWidth: '4px',
})
.addVariant('large', {
  size: '100px',
  strokeWidth: '0.5px',
})
.addVariant('title', (values) => ({
  size: '20vh',
}))
.addVariant('primary', (values) => ({
  background: values.colors.primary,
  color: values.colors.black,
}))
.addVariant('secondary', (values) => ({
  background: values.colors.secondary,
  color: values.colors.black,
}))
.addVariant('tertiary', (values) => ({
  background: values.colors.tertiary,
  color: values.colors.black,
}))
.addVariant('quaternary', (values) => ({
  background: values.colors.quaternary,
  color: values.colors.black,
}))
.addVariant('black', (values) => ({
  background: values.colors.black,
  color: values.colors.white,
}))
.createSelector();

const BlockImpl = theme.connect(styled.div`
  width: calc(${select('size')} * 2);
  height: ${select('size')};
  margin: auto;
  /* add your css here */
  & > svg {
    width: calc(${select('size')} * 2);
    height: ${select('size')};
  }

  & path {
    stroke-width: ${select('strokeWidth')} !important;
    stroke: ${select('color')} !important;
    fill: ${select('background')} !important;
    fill-opacity: ${select('opacity')} !important;
  }
`);

export const Block = (props) => <BlockImpl {...props}><BlockImage /></BlockImpl>;

Block.Small = theme.variant('small')(Block);
Block.Tiny = theme.variant('tiny')(Block);
Block.Large = theme.variant('large')(Block);
Block.Title = theme.variant('title')(Block);
Block.Primary = theme.variant('primary')(Block);
Block.Secondary = theme.variant('secondary')(Block);
Block.Black = theme.variant('black')(Block);
Block.Tertiary = theme.variant('tertiary')(Block);
Block.Quaternary = theme.variant('quaternary')(Block);
export default Block;
