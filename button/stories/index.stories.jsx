/* @jsx h */
import { h } from '@stencil/core';
import '../src';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const defaultStory = () => (
  <scale-toggle-button size->Test</scale-toggle-button>
);
export const smallSizeMonochrome = () => (
  <scale-toggle-button size="small" variant="monochrome">
    Test
  </scale-toggle-button>
);
export const disabled = () => (
  <scale-toggle-button size="large" disabled>
    Test
  </scale-toggle-button>
);
export const selected = () => (
  <scale-toggle-button size="xs" selected>
    Test
  </scale-toggle-button>
);
