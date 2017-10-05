import React from 'react';
import Section from '../components/Section';
import H1 from '../components/H1';
import P from '../components/P';
import Code from '../components/Code';
import Link from '../components/Link';

export default () => (
  <Section>
    <div>
      <H1>Start building your own Studs set today</H1>
      <P>
        Studs is available in NPM as <Code>react-studs</Code>:
      </P>
      <P><Code>npm i --save react-studs</Code></P>
      <P>
        You can start reading the documentation <Link href="https://a-type.github.io/studs/">here</Link>.
      </P>
      <P>
        There's also a <Code>studs-cli</Code> package to help bootstrap your theme and quickly create components:
      </P>
      <P><Code>npm i --save-dev studs-cli</Code></P>
      <P>
        You can read about the commands <Link href="https://github.com/a-type/studs-cli">here</Link>.
      </P>
    </div>
  </Section>
);