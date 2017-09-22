import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('Link', (values) => ({
  /* add your configurable properties here */
})).createSelector();

const LinkImpl = theme.connect(styled.a`
  /* add your css here */
`);

export const Link = (props) => <LinkImpl {...props} />;

export default Link;
