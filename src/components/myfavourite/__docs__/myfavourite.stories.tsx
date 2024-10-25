import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example";

const meta: Meta<typeof Example> = {
  title: "MyFavourite",
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    color: "hsla(316, 100%, 50%, 1)",
    disabled: false,
    onClick: () => alert("Primary favourite clicked"),
  },
};

export const Secondary: Story = {
  args: {
    color: "red",
    disabled: false,
    onClick: () => alert("Secondary favourite clicked"),
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    disabled: true,
    onClick: () => alert("Disabled favourite clicked"),
  },
};
