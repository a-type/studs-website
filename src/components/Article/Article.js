import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Article', (values) => ({
  sectionFlex: '0 0 auto',
  padding: '2vh',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  zIndex: '1000',
  position: 'relative',
})).createSelector();

const ArticleImpl = theme.connect(styled.article`
  ${spreadStyles(select)}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > section {
    flex: ${select('sectionFlex')};
  }
`);

export const Article = (props) => <ArticleImpl {...props} />;

export default Article;
