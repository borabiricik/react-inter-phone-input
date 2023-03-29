import '../src/assets/globals.css';
import { initializeRTL } from 'storybook-addon-rtl';

initializeRTL();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
