// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import Button from "./Button";

// 👇 This default export determines where your story goes in the story list

export default {
  title: "Button",
  argTypes: {
    type: { options: ["Primary", "Secondary"], control: { type: "radio" } },
  },
} as Meta;

// 👇 We create a “template” of how args map to rendering

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  type: "Primary",
  label: "Primary button",
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  type: "Secondary",
  label: "Secondary button",
};
