import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import BlockImage from './BlockImage';

const select = theme.register('Block', (values) => ({
  background: '#1337ff',
  color: 'white',
})).createSelector();

const BlockImpl = theme.connect(styled.div`
  /* add your css here */
  & > svg {
    width: 100px;
    height: 50px;
  }

  & path {
    stroke-width: 1px !important;
    stroke: ${select('color')} !important;
    fill: ${select('background')} !important;
  }
`);

export const Block = (props) => <BlockImpl {...props}><BlockImage /></BlockImpl>;

export default Block;
