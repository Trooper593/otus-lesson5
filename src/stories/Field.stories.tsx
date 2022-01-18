import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Field, {FieldProps} from "../components/Field";

export default {
    title: 'Field',
    component: Field,
} as ComponentMeta<typeof Field>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Field> = (args: FieldProps) => <Field {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    width: 10,
    height: 8
};
