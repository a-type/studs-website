```javascript
// you may need to change this to import your theme
const theme = require('../../theme').default;
theme.renderDocumentation('BuildStep');
```

```javascript
const Block = require('../Block').default;

<BuildStep
  number={13}
  pieces={[
    {
      display: <Block />,
      count: 3,
    },
  ]}
  details="A description of the step"
  code="exampleCode();"
>
  <Block.Large />
</BuildStep>
```
