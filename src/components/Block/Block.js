import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import BlockImage from './BlockImage';

const select = theme.register('Block', (values) => ({
  background: values.colors.primaryContrast,
  color: values.colors.primary,
  size: '50px',
}))
.addVariant('small', {
  size: '25px',
})
.addVariant('large', {
  size: '100px',
})
.addVariant('logo', {
  size: '20vh',
}).createSelector();

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
    stroke-width: 1px !important;
    stroke: ${select('color')} !important;
    fill: ${select('background')} !important;
  }
`);

export const Block = (props) => <BlockImpl {...props}><BlockImage /></BlockImpl>;

Block.Small = theme.variant('small')(Block);
Block.Large = theme.variant('large')(Block);
Block.Logo = theme.variant('logo')(Block);
export default Block;
