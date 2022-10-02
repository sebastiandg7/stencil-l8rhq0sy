/* @jsx h */
import { h } from '@stencil/core';
import Layout from '@divriots/dockit-stencil/layout';
import Logo from './Logo';

export default ({ __context }, children) => (
  <div style={{ '--dockit-layout-accent': 'rgb(238,82,82)' }}>
    <Layout __context={__context} logo={Logo}>
      {children}
    </Layout>
  </div>
);
