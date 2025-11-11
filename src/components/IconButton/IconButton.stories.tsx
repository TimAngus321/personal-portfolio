import type { Meta, StoryObj } from '@storybook/react-vite';
import HomeIcon from "./IconButton";

const meta = {
  component: HomeIcon,
  title: 'Components/HomeIcon',
  tags: ['autodocs'],
} satisfies Meta<typeof HomeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
