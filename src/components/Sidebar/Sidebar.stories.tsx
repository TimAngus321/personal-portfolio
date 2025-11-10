import type { Meta, StoryObj } from '@storybook/react-vite';
import Sidebar from "./Sidebar";

const meta = {
  component: Sidebar,
  title: 'Components/Sidebar',
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
