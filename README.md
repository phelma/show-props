# Show Props

A React component that shows you the props that it recieves, useful for debugging.

### Usage

`npm install show-props --save-dev`

```js
import ShowProps from 'show-props'

<ShowProps someProp={someProp} otherProps={{...otherProps}} />
```

Renders the props as an exploreable json tree (thanks to `react-json-view`)

