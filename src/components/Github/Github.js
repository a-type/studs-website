import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import iconSrc from './Icon.png';

const select = theme.register('Github', (values) => ({
  size: '32px',
})).createSelector();

const GithubImpl = theme.connect(styled.img`
  width: ${select('size')};
  height: ${select('size')};
  cursor: pointer;
`);

export const Github = (props) => (
  <a href="https://github.com/a-type/studs">
    <GithubImpl {...props} src={iconSrc} />
  </a>
);

export default Github;
