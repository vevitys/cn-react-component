// Button.stories.js|jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import './../../styles/index.scss';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '按钮用于开始一个即时操作。',
      },
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {children: 'primary'};

export const Link = Template.bind({});
Link.args = {btnType: 'link', href: "http://www.baidu.com", children: 'link'};

export const Danger = Template.bind({});
Danger.args = {btnType: 'danger', size: 'large', children: 'danger'};

export const Disabled = Template.bind({});
Disabled.args = {disabled: true, children: 'disabled'};

