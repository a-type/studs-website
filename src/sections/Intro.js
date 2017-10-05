import React from 'react';
import Block from '../components/Block';
import Logo from '../components/Logo';
import Section from '../components/Section';
import theme from '../theme';

export default () => (
  <Section.Row>
    <Block.Title style={{ marginRight: 0 }}/><Logo.Title style={{ marginLeft: 0}}/>
  </Section.Row>
);