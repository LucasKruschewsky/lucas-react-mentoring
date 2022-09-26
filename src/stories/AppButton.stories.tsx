import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppButton from '../global/styled/AppButton';

export default {
  title: 'AppButton',
  component: AppButton,
  argTypes: {
    buttonStyle: {
      options: ['default', 'transparent', 'defaultOutlined'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args}>App Button</AppButton>
);

export const Default = Template.bind({});
Default.args = {
  buttonStyle: 'default',
};
