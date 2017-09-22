import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('Logo', (values) => ({
  /* add your configurable properties here */
})).createSelector();

const LogoImpl = theme.connect(styled.div`
  /* add your css here */
`);

export const Logo = (props) => <LogoImpl {...props} />;

export default Logo;
