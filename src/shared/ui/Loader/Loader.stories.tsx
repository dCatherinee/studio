// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { Loader } from "./Loader";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
