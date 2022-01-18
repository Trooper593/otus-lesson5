import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Item, {ElemProps} from "../components/Item";

export default {
    title: 'Item',
    component: Item,
} as ComponentMeta<typeof Item>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Item> = (args: ElemProps) => <Item {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    num: 1,
    x: 0,
    y: 0,
    isAlive: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    isAlive: false
};
