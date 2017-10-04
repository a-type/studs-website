import React from 'react';
import Section from '../components/Section';
import P from '../components/P';
import BlockStack from '../components/BlockStack';
import Github from '../components/Github';

export default () => (
  <Section.Row style={{ alignItems: 'flex-end' }}>
    <BlockStack />
    <div style={{ display: 'flex', marginBottom: '8px' }}>
      <Github />
      <div style={{ margin: 'auto 16px' }}>Made by Grant Forrest. Licensed MIT.</div>
    </div>
  </Section.Row>
)