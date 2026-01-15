import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { Button, ThemeButton } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usual: Story = {
  args: {
    children: "Ya knopka",
    theme: ThemeButton.USUAL,
  },
};

export const Outline: Story = {
  args: {
    children: "Ya knopka",
    theme: ThemeButton.OUTLINE,
  },
};

export const Text: Story = {
  args: {
    children: "Ya knopka",
    theme: ThemeButton.TEXT,
  },
};
