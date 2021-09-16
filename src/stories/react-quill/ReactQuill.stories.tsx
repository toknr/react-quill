import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactQuill } from "./ReactQuill";

export default {
  title: "Example/react-quill/ReactQuill",
  component: ReactQuill,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ReactQuill>;

const Template: ComponentStory<typeof ReactQuill> = (args) => (
  <ReactQuill {...args} />
);

export const Quill = Template.bind({});
Quill.args = {
  primary: true,
  label: "Button",
};
