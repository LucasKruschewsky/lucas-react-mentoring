import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'Root/store';
import Navbar from '../components/Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    showBackground: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Provider store={createStore({})}>
    <MemoryRouter>
      <Navbar {...args} />
    </MemoryRouter>
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  buttonStyle: 'default',
};
Default.args = {
  showBackground: false,
};
