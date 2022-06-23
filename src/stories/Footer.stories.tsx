import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const FooterUscrolled: ComponentStory<typeof Footer> = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);
