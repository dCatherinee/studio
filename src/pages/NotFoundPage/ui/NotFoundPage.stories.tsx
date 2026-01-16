// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
