// @ts-ignore
import { transform } from 'cssjanus';
import { css } from 'styled-components';

function cssToString(cssStyles: any, p: any) {
  return cssStyles.reduce((result: any, v: any) => {
    let addition = v;
    if (typeof v === 'function') {
      const vResult = v(p);
      addition =
        typeof vResult === 'string' ? vResult : cssToString(vResult, p);
    }
    return result + addition;
  }, '');
}

const rtl =
  (...styles: [any, any]) =>
  (p: any) => {
    const cssStyles = css(...styles);
    const dir = p.dir || p.theme.dir;
    return dir === 'rtl' ? transform(cssToString(cssStyles, p)) : cssStyles;
  };

export { rtl };
