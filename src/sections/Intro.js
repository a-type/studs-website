import React from 'react';
import Block from '../components/Block';
import Logo from '../components/Logo';
import Section from '../components/Section';
import theme from '../theme';

export default () => (
  <Section.Row>
    <Block.Title /><Logo.Title />
  </Section.Row>
);