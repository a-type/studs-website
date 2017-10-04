import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import H1 from '../components/H1';
import BuildStep from '../components/BuildStep';
import Block from '../components/Block';
import theme, { changeTheme } from '../theme';

const SmallPrimaryBlock = theme.variant(['small', 'primary'])(Block);
const SmallSecondaryBlock = theme.variant(['small', 'secondary'])(Block);
const SmallBlackBlock = theme.variant(['small', 'black'])(Block);
const TinyPrimaryBlock = theme.variant(['tiny', 'primary'])(Block);
const TinySecondaryBlock = theme.variant(['tiny', 'secondary'])(Block);

theme.registerVariant('Block', 'fancy', ({ colors }) => ({
  background: colors.tertiary,
  color: colors.quinary,
  opacity: 0.9,
}));
const FancyBlock = theme.variant('fancy')(Block);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  & > div {
    flex: 1 0 0;
    min-width: 300px;
  }
`;

const steps = [
  'A Studs component is just like any other React component you would create. Studs interoperates with styled-components, and could possibly also be used to manage other CSS-in-JS solutions. When you style a component with a Studs theme, you first register the component in your theme with all of its configurable values.',
  'Once you register defaults, you can also register variants. Variants can change or add values any way you see fit. Applying any number of variants to a component is easy!',
  'Configurable values don\'t have to be CSS. They can be any meaningful value you want to use to define your styling. For instance, this Block component\'s size value controls its width and height based on a configured proportion.',
  'Now that you\'ve created your components and pre-defined variants, you can just ship out your library as-is. Your users can utilize the components and variants you define.',
  'But that\'s only the beginning. Your users can also add their own variants, modifying any of the properties you defined, just like you did!',
  'All styling utilizes a theme, and the theme can also be extended by users—allowing them to make broad customizations across both your original components, and their own customized variants. Try clicking a block to see it in action!',
];

export default () => (
  <Section>
    <Container>
      <BuildStep
        number={1}
        pieces={[
          {
            count: 1,
            display: <Block.Small />
          }
        ]}
        details={steps[0]}
      >
        <Block style={{ marginBottom: '16px' }}/>
      </BuildStep>
      <BuildStep
        number={2}
        pieces={[
          {
            count: 1,
            display: <Block.Small />,
          },
          {
            count: 1,
            display: <SmallPrimaryBlock />,
          },
          {
            count: 1,
            display: <SmallSecondaryBlock />,
          },
        ]}
        details={steps[1]}
      >
        <Block.Secondary style={{ zIndex: 2, transform: 'translateY(34px)' }} />
        <Block.Primary style={{ zIndex: 1, transform: 'translateY(0)' }} />
        <Block style={{ zIndex: 0, transform: 'translateY(-34px)' }} />
      </BuildStep>
      <BuildStep
        number={3}
        pieces={[
          {
            count: 1,
            display: <Block />,
          },
          {
            count: 1,
            display: <Block.Small />,
          },
          {
            count: 1,
            display: <Block.Tiny />,
          },
        ]}
        details={steps[2]}
      >
        <Block.Small style={{ zIndex: 2, transform: 'translateY(17px) translateX(51px)' }} />
        <Block style={{ zIndex: 1, transform: 'translateY(-5px) translateX(34px)' }} />
        <Block.Large style={{ zIndex: 0, transform: 'translateY(-50px)' }} />
      </BuildStep>
      <BuildStep
        number={4}
        pieces={[
          {
            count: 2,
            display: <Block.Small />,
          },
          {
            count: 1,
            display: <TinyPrimaryBlock />,
          },
          {
            count: 2,
            display: <TinySecondaryBlock />,
          },
        ]}
        details={steps[3]}
      >
        <SmallSecondaryBlock style={{ zIndex: 1, transform: 'translateY(70px) translateX(17px)' }} />
        <SmallSecondaryBlock style={{ zIndex: 0, transform: 'translateY(52px) translateX(17px)' }} />
        <SmallPrimaryBlock style={{ zIndex: 4, transform: 'translateY(33px) translateX(-31px)' }} />
        <Block style={{ zIndex: 3, transform: 'translateY(-27px) translateX(-1px)' }} />
        <Block style={{ zIndex: 2, transform: 'translateY(-50px) translateX(-25px)' }} />
      </BuildStep>
      <BuildStep
        number={1}
        pieces={[
          {
            count: 1,
            display: <Block.Small />
          }
        ]}
        details={steps[4]}
        scribble="Plus one fancy block!"
      >
        <FancyBlock style={{ zIndex: 1, transform: 'translateY(0)' }} />
        <Block style={{ transform: 'translateY(-33px)' }}/>
      </BuildStep>
      <BuildStep
        number={1}
        pieces={[
          {
            count: 1,
            display: <SmallPrimaryBlock />
          },
          {
            count: 1,
            display: <SmallSecondaryBlock />,
          },
          {
            count: 1,
            display: <SmallBlackBlock />,
          },
        ]}
        details={steps[5]}
      >
        <div style={{ display: 'flex', marginBottom: '8px' }}>
          <div style={{ textAlign: 'center' }}>
            <Block.Primary style={{ cursor: 'pointer' }} onClick={() => changeTheme('default')} />
            <p>Primary</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Block.Secondary style={{ cursor: 'pointer' }} onClick={() => changeTheme('secondary')} />
            <p>Secondary</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Block.Black style={{ cursor: 'pointer' }} onClick={() => changeTheme('black')} />
            <p>Dark</p>
          </div>
        </div>
      </BuildStep>
    </Container>
  </Section>
)