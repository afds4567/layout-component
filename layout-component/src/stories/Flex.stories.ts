import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../lib/components/Flex";

const meta = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "direction",
      table: {
        type: { summary: "string" },
      },
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "justify",
      table: {
        type: { summary: "string" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      description: "align",
      table: {
        type: { summary: "string" },
      },
    },
    gap: {
      control: { type: "select" },
      description: "gap",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta;

export default meta;

export const Default: any = {
  args: {
    direction: "row",
    justify: "flex-start",
    align: "flex-start",
    gap: 0,
  },
};
