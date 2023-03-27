// Button.stories.tsx
import { Meta } from "@storybook/react";
import Button, { IButtonProps } from "../components/Button";

export default {
  component: Button,
  args: {},
} as Meta<IButtonProps>;

export const Primary = (args: IButtonProps) => <Button {...args} />;
Primary.args = {
  label: "Button",
  primary: true,
};
