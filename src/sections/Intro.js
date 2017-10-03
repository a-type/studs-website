import React from 'react';
import Block from '../components/Block';
import Logo from '../components/Logo';
import theme from '../theme';

export default () => (
  <div style={{ height: '90vh', display: 'flex' }}>
    <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}><Block.Logo /><Logo>STUDS</Logo></div>
  </div>
);