import * as React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 1000 1000">
</svg>
`;

export default ({ width, height }) => (<SvgCss width={width} height={height} xml={xml} />);