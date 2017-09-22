import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('Button', (values) => ({
  /* add your configurable properties here */
})).createSelector();

const ButtonImpl = theme.connect(styled.button`
  /* add your css here */
`);

export const Button = (props) => <ButtonImpl {...props} />;

export default Button;
