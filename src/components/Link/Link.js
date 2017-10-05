import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Link', (values) => ({
  color: values.colors.primary,
  cursor: 'pointer',
})).createSelector();

const LinkImpl = theme.connect(styled.a`
  ${spreadStyles(select)}
`);

export const Link = (props) => <LinkImpl {...props} />;

export default Link;
